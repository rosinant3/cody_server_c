import baseService from '../../../baseService';
import crypt from '../../../ralphs/crypt/crypt';
import { ICreateService } from './createInterface';
import { firstValueFrom } from 'rxjs';
import validators from './validators/validators';
import model from './model';

const createService:ICreateService = Object.create(baseService);
createService.crypt = crypt;
createService.model = model;
createService.validators = validators;

createService.validate = async function (params) { 

    const val = await this.validators.schemaValidator(params);
    await this.validators.validateDuplicateUsername(val.username);
    await this.validators.validateDuplicateEmail(val.email);
    return val;

}; 

createService.execute = async function (params) {

  try {
    const pass: { passwordHash:string } = await firstValueFrom(this.crypt.hashPassword(params.password, 10));
    params.password = pass.passwordHash;
    delete params.repeatPassword;
  } catch (e) {
    throw new Error('Internal Server Error.');
  }

  try {
    const insert: { insertId:number } = await firstValueFrom(this.model.createModel.query(params));
    params.userId = insert.insertId;
  } catch (e) {
    throw new Error('Internal Server Error.');
  }

  return params;
};

export default createService;