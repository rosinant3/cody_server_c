import { props } from '../../../../interface';
import { IBaseFileSrvice, ISchema } from '../../interface';

export interface IStatusParams {
    filePath: string;   
};

export interface IInfoObjectProps {
    filePath: props;
};

export interface IFilePathSchema extends ISchema {
    properties: {
        filePath: props;
    };
};

export interface IStatusValidationService extends IBaseFileSrvice {
    validate: (params: IStatusParams) => Promise<IStatusParams>;
    schema: ISchema; 
};