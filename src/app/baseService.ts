import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, $data: true, coerceTypes: true, strictTuples: false });

addFormats(ajv);
ajvErrors(ajv);


export interface IAjvService {
    ajv: typeof Ajv;
};

export interface IBaseService extends IAjvService {
    run: () => any;
};

export const ajvService:IAjvService = {
    ajv: ajv
};

const baseService:IBaseService | any = Object.create(ajvService);
baseService.run = function () {
    return this.validate(this.params).then((cleanParams:any) => this.execute(cleanParams));
};

export default baseService;