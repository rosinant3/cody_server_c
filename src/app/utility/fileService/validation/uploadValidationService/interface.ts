import {

    IBaseFileSrvice,
    ISchema

} from '../../interface';
import { props } from '../../../../interface';

export interface IFileInfoObjectProps {
    fileId: props;
};

export interface IFileObjectProps {
    contentRange: props;
};

export interface IFileSchema extends ISchema {
    properties: IFileObjectProps;
};

export interface IFileInfoSchema extends ISchema {
    properties: IFileInfoObjectProps;
};

export interface IUploadValidationService extends IBaseFileSrvice {
    allowedFiles: string[]; 
    allowedFileTypes: string[];
    validate: (files: any, info: any) => Promise<any>;
    selectFile: (files: any) => Promise<any>;
    validateFileExtension: (file: any, info: any) => Promise<boolean>;
 
    schemas: {
        file: IFileSchema;
        info: IFileInfoSchema
    };
};