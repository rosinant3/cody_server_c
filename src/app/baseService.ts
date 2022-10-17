const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, coerceTypes: true, strictTuples: false });

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