import baseService from '../../../../../baseService';
import { ISelectService } from './interface';
import selectModel from '../model/select/selectModel';
import { firstValueFrom } from 'rxjs';

const createService:ISelectService = Object.create(baseService);

createService.schema = {
    type: "object",
    properties: {
      incident: {type: "number" },
      hook: {type: "string", minLength: 1, maxLength: 100 },
      currentPage: {type: "number" },
      perPage: {type: "number" },
      uploaded: { type: "number"},
      mimetype: { type: "string", minLength: 1, maxLength: 45 }
    },
    required: ["incident", "hook", "currentPage", "perPage", "mimetype", "uploaded"],
    additionalProperties: false
};

createService.validate = async function (params) {
    const valid = await this.ajv.validate(this.schema, params);
    if (!valid) throw new Error(JSON.stringify(this.ajv.errors));
    return params;
};

createService.execute = async function (params) {
  let pageCount: number | null = null;
  if (params.currentPage == 1) {
    const count = await firstValueFrom(selectModel.count({ incident: params.incident, type: params.mimetype }));
    pageCount = count.results ? count.results[0]['count(*)'] : 0;
  }
  const select = await firstValueFrom(selectModel.query(params));
  return {
    data: select.results, /* toDo: map results?  */
    pageCount: pageCount
  };
};

export default createService;