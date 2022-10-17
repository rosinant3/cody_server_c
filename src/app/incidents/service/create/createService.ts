import baseService from '../../../baseService';
import { ICreateService, IIncidentParams } from './interface';
import createModel from '../model/create/createModel';
import { firstValueFrom } from 'rxjs';
import { queueGraphicObservables } from './utils';
import schema from './schema';

const createService:ICreateService = Object.create(baseService);

createService.schema = schema;
createService.graphicsSchema = {  
  type: "array", 
  minItems: 1, 
  maxItems: 20,
  items: [{
    type: "array",
    items: [{ type: "string" }],
    minItems: 1
  }] 
};

createService.validate = async function (params) {

    //params.caseId = Number(params.caseId);
    //params.userId = Number(params.userId);

    const valid = await this.ajv.validate(this.schema, params);
    if (!valid) throw new Error(JSON.stringify(this.ajv.errors));

    params.graphics  = await JSON.parse(params.graphics);
    const validGraphics = await this.ajv.validate(this.schema, params.graphics);
    if (!validGraphics) throw new Error(JSON.stringify(this.ajv.errors));
    
    return params;
}; 
 
createService.execute = async function (params:IIncidentParams) {
  let graphics:any = params.graphics; 
  delete params.graphics;
  const create = await firstValueFrom(createModel.query(params));
  const incidentId:any = create.insertId;
  const observables = await queueGraphicObservables(graphics, incidentId);
  const graphicsIds = await firstValueFrom(observables);
  return {
    incidentId: incidentId, /* toDo: map results?  */
    graphics: graphicsIds
  };
};

export default createService;