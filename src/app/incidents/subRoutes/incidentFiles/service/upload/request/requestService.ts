import baseService from '../../../../../../baseService';
import { IRequestService, IRequestParams } from './interface';
import createModel from '../../model/create/createModel';
import { firstValueFrom } from 'rxjs';
import schema from './schema';

const requestService:IRequestService = Object.create(baseService);

requestService.schema = schema;
requestService.graphicsSchema = { 
  type: "array", 
  minItems: 1, 
  maxItems: 20,
  items: [{
    type: "array",
    items: [{ type: "string" }],
    minItems: 1
  }] 
};

requestService.validate = async function (params) {


    return params;
}; 
 
requestService.execute = async function (params:IRequestParams) {


  return {

  };
};

export default requestService;