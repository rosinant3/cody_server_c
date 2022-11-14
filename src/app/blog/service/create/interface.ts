import { IBaseService } from '../../../baseService';
import { props } from '../../../interface';

export interface ICreateParams {
    title: string;
    userId: number;
    url: string;
};

export interface IIncidentParams {
    title: string;
    userId: number;
    url: string;
};


export interface ICreateDataProps {
    title: props;
    userId: props;
    url: props;
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
    schema: any;
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