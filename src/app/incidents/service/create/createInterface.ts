import { IBaseService } from '../../../baseService';

type porps = { 
        type: string;
        minLength?: number;
        maxLength?: number;
        maxItems?: number; 
        minItems?: number; 
};

export interface ICreateParams {
    content: string;
    color: string;
    id: number;
    dateTime: string;
    iduser: number;
    graphics: string
};

export interface ICreateDataProps {
    content: porps;
    color: porps;
    id: porps;
    dateTime: porps;
    iduser: porps;
    graphics: porps;
    username: porps;
};

interface ISchema {
    type: string;
    properties: ICreateDataProps;
    required: any[];
    additionalProperties: boolean;
};

export interface ICreateService extends IBaseService {
    validate: (params :ICreateParams) => any;
    execute: (params: ICreateParams) => any;
    schema: ISchema;
};

export interface ICreateParams extends ICreateService {
    params: ICreateParams;
    context: string;
}

export interface IValidationObject {
    schema: ISchema;
    data: any;
};