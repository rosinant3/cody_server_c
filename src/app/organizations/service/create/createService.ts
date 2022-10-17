import baseService from '../../../baseService';
import { ICreateService } from './createInterface';
import createModel from '../model/create/createModel';
import { firstValueFrom } from 'rxjs';
import duplicateEmailService from '../utility/duplicateEmailService/duplicateEmailService';
import duplicateNameService from '../utility/duplicateNameService/duplicateNameService';

const createService:ICreateService = Object.create(baseService);

createService.schema = {
    type: "object",
    properties: {
      name: {type: "string", minLength: 1, maxLength: 25 },
      email: {type: "email", minLength: 1, maxLength: 250 }, 
      password1: {type: "string", minLength: 7 },
      password2: {type: "string", minLength: 7 }, 
    },
    required: [ "name", "email", "password1", "password2" ],
    additionalProperties: false
};
 
createService.validate = async function (params) {
    const valid = await this.ajv.validate(this.schema, params);
    if (!valid) throw new Error(JSON.stringify(this.ajv.errors));
    const emailValid = await duplicateEmailService.run(params.email);
    // rewrite it to be like ajv
    const nameValid = await duplicateNameService.run(params.name);
    return params;
};

createService.execute = async function (params) {
  const select = await firstValueFrom(createModel.query(params));
  return {
    data: select.results, /* toDo: map results?  */
  };
};

export default createService;