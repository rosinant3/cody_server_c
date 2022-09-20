import baseService from '../../../baseService';
import { ICreateService } from './createInterface';
import createModel from '../model/create/createModel';
import { firstValueFrom } from 'rxjs';

const createService:ICreateService = Object.create(baseService);

createService.schema = {
    type: "object",
    properties: {
      content: {type: "string", minLength: 1, },
      color: {type: "string", minLength: 1, maxLength: 100 },
      id: {type: "number" },
      dateTime: { type:"string", minLength: 1, maxLength: 100  },
      iduser: { type: "number" },
      graphics: { type: "array", "minItems": 1, "maxItems": 20 },
      username: { type:"string", minLength: 1, maxLength: 100 }
    },
    required: ["content", "color", "id", "dateTime", "iduser", "username", "graphics"],
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
  const select = await firstValueFrom(createModel.create(params));
  return {
    data: select.results, /* toDo: map results?  */
  };
};

export default createService;