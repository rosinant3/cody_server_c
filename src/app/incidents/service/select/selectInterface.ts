import { IBaseService } from '../../../baseService';

type props = { 
        type: string;
        minLength?: number;
        maxLength?: number;
        maxItems?: number; 
        minItems?: number; 
};

export interface ISelectParams {
    hook: string;
    perPage: number;
    currentPage: number;
    case_: number;
};

export interface ISelectDataProps {
    hook: props;
    perPage: props;
    currentPage: props;
    case_: props;
};

interface ISchema {
    type: string;
    properties: ISelectDataProps;
    required: any[];
    additionalProperties: boolean;
};

export interface ISelectService extends IBaseService {
    validate: (params :ISelectParams) => any;
    execute: (params: ISelectParams) => any;
    schema: ISchema;
};

export interface ISelectParams extends ISelectService {
    params: ISelectParams;
    context: string;
}

export interface IValidationObject {
    schema: ISchema;
    data: any;
};