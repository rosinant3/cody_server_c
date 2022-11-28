import {

    IFile,
    IBaseFileSrvice,
    IFileObject,
    ISchema,
    IFileInfoObject,
    IFileObjectProps

} from '../../interface';
import { props } from '../../../../interface';

export interface IInfoObjectProps {
    parentId: props;
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
    validate: (files: IFile[], info:IFileInfoObject) => Promise<IFileObject>;
    selectFile: (files: IFile[]) => Promise<IFile>;
    validateFileExtension: (file: IFile, info: IFileInfoObject) => void;
 
    schemas: {
        info: IInfoSchema;
        file: IFileSchema;
    };
};