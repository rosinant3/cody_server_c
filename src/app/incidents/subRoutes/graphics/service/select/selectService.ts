import baseService from '../../../../../baseService';
import { ISelectService } from './interface';
import selectModel from '../model/select/selectModel';
import { firstValueFrom } from 'rxjs';

const selectService:ISelectService = Object.create(baseService);

selectService.schema = {
    type: "object",
    properties: {
      case_: {type: "number" },
      hook: {type: "string", minLength: 1, maxLength: 100 },
      currentPage: {type: "number" },
      perPage: {type: "number" },
    }, 
    required: ["case_", "hook", "currentPage", "perPage"],
    additionalProperties: false
};

selectService.validate = async function (params) {
    const valid = await this.ajv.validate(this.schema, params);
    if (!valid) throw new Error(JSON.stringify(this.ajv.errors));
    return params;
};

selectService.execute = async function (params) {
  let pageCount: number | null = null;
  if (params.currentPage == 1) {
    const count = await firstValueFrom(selectModel.count(params.case_));
    pageCount = count.results ? count.results[0]['count(*)'] : 0;
  }
  const select = await firstValueFrom(selectModel.query(params));
  return {
    data: select.results, /* toDo: map results?  */
    pageCount: pageCount
  };
};

export default selectService;