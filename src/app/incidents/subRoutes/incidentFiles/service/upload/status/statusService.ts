import baseService from '../../../../../../baseService';
import { IStatusRequestService, IStatusParams } from './interface';
import createModel from '../../model/create/createModel';
import { firstValueFrom } from 'rxjs';
import schema from './schema';

const statusService:IStatusRequestService = Object.create(baseService);

statusService.schema = schema;
statusService.graphicsSchema = { 
  type: "array", 
  minItems: 1, 
  maxItems: 20,
  items: [{
    type: "array",
    items: [{ type: "string" }],
    minItems: 1
  }] 
};

statusService.validate = async function (params) {


    return params;
}; 
 
statusService.execute = async function (params:IStatusParams) {


  return {

  };
};

export default statusService;