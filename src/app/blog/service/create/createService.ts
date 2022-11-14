import baseService from '../../../baseService';
import { ICreateService, IIncidentParams } from './interface';
import createModel from '../model/create/createModel';
import { v4 as uuidv4 } from 'uuid';
import { firstValueFrom } from 'rxjs';
import schema from './schema';
 
const createService:ICreateService = Object.create(baseService);

createService.schema = schema; 

createService.validate = async function (params) {

    params.url = await `${params.title}-${uuidv4()}`;
    const params2 = {};
    try {
      const value = await this.schema.validateAsync(params2);
      return value; 
    } catch (err) { 
      throw err;
    }
}; 
 
createService.execute = async function (params:IIncidentParams) {

  const create = await firstValueFrom(createModel.query(params));
  const blog_post_id:number = create.insertId;
  const url = params.url;

  return {
    blog_post_id,
    url
  };
};

export default createService;