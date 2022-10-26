import baseService from '../../baseFileService';
import { IStatusValidationService } from './interface';
import { schema } from './schema';


const statusValidationService:IStatusValidationService = Object.create(baseService);

statusValidationService.schema = schema;

statusValidationService.validate = async function(params, info) {
     
    const valid = await this.ajv.validate(this.schema, params);
    if (!valid) throw new Error(this.ajv.errors);
    return { params, info };
    
};


export default statusValidationService;