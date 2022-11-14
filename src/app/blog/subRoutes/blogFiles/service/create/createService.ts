import baseService from '../../../../../baseService';
import { ICreateService, ICreateParams } from './interface';
import createModel from '../model/create/createModel';
import { firstValueFrom } from 'rxjs'; 
import schema from './schema';

const createService:ICreateService = Object.create(baseService);

createService.schema = schema;

createService.validate = async function (params) {

    const valid = await this.ajv.validate(this.schema, params);
    if (!valid) throw new Error(JSON.stringify(this.ajv.errors));
    return params;
    
}; 
 
createService.execute = async function (params:ICreateParams) {

  const create = await firstValueFrom(createModel.query(params));
  const insertId:number = create.insertId;
  return insertId;

};

export default createService;