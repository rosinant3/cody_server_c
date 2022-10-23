import { IBaseService } from '../../../../../baseService';

type props = { 
        type: string;
        minLength?: number;
        maxLength?: number;
        maxItems?: number; 
        minItems?: number;  
        items?: any;
};

export interface ICreateParams {
    url: string;
    incident: number;
    mimetype: string;
};

export interface ICreateDataProps {
    url: props;
    incident: props;
    mimetype: props;
};

export interface ISchema {
    type: string;
    properties: ICreateDataProps;
    required: any[];
    additionalProperties: boolean;
};

export interface ICreateService extends IBaseService {
    validate: (params :ICreateParams) => any;
    execute: (params: ICreateParams) => any;
    schema: ISchema;
    graphicsSchema: props
};

export interface ICreateParamsService extends ICreateService {
    params: ICreateParams;
    context: string;
};

export interface IValidationObject {
    schema: ISchema;
    data: any;
};