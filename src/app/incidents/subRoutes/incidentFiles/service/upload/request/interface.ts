import { IBaseService } from '../../../../../../baseService';
import { IFileObjectProps } from '../../../../../../utility/fileService/interface';

type props = { 
        type: string;
        minLength?: number;
        maxLength?: number;
        maxItems?: number; 
        minItems?: number;  
        items?: any;
};

export interface IRequestParams {
    file: IFileObjectProps;
};

export interface IRequestDataProps {
    content: props;
    color: props;
    caseId: props;
    dateTime: props;
    userId: props;
    graphics: props;
};

export interface ISchema {
    type: string;
    properties: IRequestDataProps;
    required: any[];
    additionalProperties: boolean;
};

export interface IRequestService extends IBaseService {
    validate: (params :IRequestParams) => any;
    execute: (params: IRequestParams) => any;
    schema: ISchema;
    graphicsSchema: props
};

export interface IRequestParamsService extends IRequestService {
    data: IRequestParams;
    context: string;
}

export interface IValidationObject {
    schema: ISchema;
    data: any;
};