import { IBaseService } from '../../../../../../baseService';

type props = { 
        type: string;
        minLength?: number;
        maxLength?: number;
        maxItems?: number; 
        minItems?: number;  
        items?: any;
};

export interface IStatusRequestParams {
    content: string;
    color: string;
    caseId: number;
    dateTime: string;
    userId: number;
    graphics: string
};

export interface IStatusParams {
    content: string;
    color: string;
    caseId: number;
    dateTime: string;
    userId: number;
    graphics?: string
};


export interface IStatusRequestDataProps {
    content: props;
    color: props;
    caseId: props;
    dateTime: props;
    userId: props;
    graphics: props;
};

export interface ISchema {
    type: string;
    properties: IStatusRequestDataProps;
    required: any[];
    additionalProperties: boolean;
};

export interface IStatusRequestService extends IBaseService {
    validate: (params :IStatusRequestParams) => any;
    execute: (params: IStatusRequestParams) => any;
    schema: ISchema;
    graphicsSchema: props
};

export interface IStatusRequestParamsService extends IStatusRequestService {
    data: IStatusRequestParams;
    context: string;
}

export interface IValidationObject {
    schema: ISchema;
    data: any;
};