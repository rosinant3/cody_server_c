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
    content: string;
    color: string;
    caseId: number;
    dateTime: string;
    userId: number;
    graphics: string
};

export interface IIncidentParams {
    content: string;
    color: string;
    caseId: number;
    dateTime: string;
    userId: number;
    graphics?: string
};


export interface ICreateDataProps {
    name: props;
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
    data: ICreateParams;
    context: string;
}

export interface IValidationObject {
    schema: ISchema;
    data: any;
};