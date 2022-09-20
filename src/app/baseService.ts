const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, coerceTypes: true });

export interface IBaseService {
    ajv: typeof Ajv;
    run: () => any;
}

const baseService:IBaseService | any = {
    ajv: ajv,
    run: function () {
        return this.validate(this.params).then((cleanParams:any) => this.execute(cleanParams));
    },
};

export default baseService;