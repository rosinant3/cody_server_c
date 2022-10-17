import baseService from '../../../baseService';
import { ICreateService } from './createInterface';
import createModel from '../model/create/createModel';
import { firstValueFrom } from 'rxjs';

const createService:ICreateService = Object.create(baseService);

createService.schema = {
    type: "object",
    properties: {
      username: {type: "string", minLength: 1, maxLength: 25 },
      email: {type: "email", minLength: 1, maxLength: 250 },
      ogranization: {type: "number", minLength: 1,},
      password1: {type: "string", minLength: 7 },
      password2: {type: "string", minLength: 7 },
    },
    required: [ "username", "email", "password1", "password2", "ogranization" ],
    additionalProperties: false
}

createService.validate = async function (params) {
    params.content = "";
    params.graphics = JSON.parse(params.graphics);
    const valid = await this.ajv.validate(this.schema, params);
    if (!valid) throw new Error(JSON.stringify(this.ajv.errors));
    return params;
}

createService.execute = async function (params) {
  const select = await firstValueFrom(createModel.query(params));
  return {
    data: select.results, /* toDo: map results?  */
  };
};

export default createService;