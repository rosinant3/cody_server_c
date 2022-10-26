import { props } from '../../../../interface';
import { IBaseFileSrvice, ISchema } from '../../interface';

export interface IStatusParams {
    filePath: string;  
};

export interface IInfoObjectProps {
    busboy: props;
};

export interface IFilePathSchema extends ISchema {
    properties: {
        filePath: props;
    };
};

export interface IStatusValidationService extends IBaseFileSrvice {
    validate: (params: IStatusParams, info: IInfoObjectProps) => Promise<{ params: IStatusParams, info: IInfoObjectProps }>;
    schema: ISchema; 
};