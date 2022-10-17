import {

    IFile,
    IFileObj,
    IBaseFileSrvice,
    IFileObject,
    ISchema,
    IFileInfoObject,
    IFileObjectProps

} from '../../interface';
import { props } from '../../../../interface';

export interface IInfoObjectProps {
    id: props;
    type: props;
    allowedFiles: props;
    allowedFileTypes: props;
};

export interface IFileSchema extends ISchema {
    properties: IFileObjectProps;
};

export interface IInfoSchema extends ISchema {
    properties: IInfoObjectProps;
};

export interface IFileValidationService extends IBaseFileSrvice {
    allowedFiles: string[]; 
    allowedFileTypes: string[];
    validate: (files: IFileObj[], info:IFileInfoObject) => Promise<IFileObject>;
    selectFile: (files: IFileObj[]) => Promise<IFile>;
    validateFileExtension: (file: IFile, info: IFileInfoObject) => Promise<boolean>;
 
    schemas: {
        info: IInfoSchema;
        file: IFileSchema;
    };
};