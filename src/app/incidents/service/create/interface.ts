import { IBaseService } from '../../../baseService';
import { props } from '../../../interface';

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
    content: props;
    color: props;
    caseId: props;
    dateTime: props;
    userId: props;
    graphics: props;
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
}

export interface IValidationObject {
    schema: ISchema;
    data: any;
};