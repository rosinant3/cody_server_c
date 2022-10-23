import { props } from '../../interface';
import { IAjvService } from '../../baseService';
import { Observable } from 'rxjs';
import { IFileValidationService } from './validation/fileValidationService/interface';

export interface IFileObjectProps {
    name: props;
    mimetype: props;
    url: props;
};

export interface ISchema {
    type: string;
    required: any[];
    additionalProperties: boolean;
};

export interface IFileInfoObject {
    parentId: number;
    fileId: string;
    type: string;
    allowedFiles: string[];
    allowedFileTypes: string[];
    schema?: any;
    fileSchema?: any;
};

export interface IFile {
    name: string;
    mimetype: string;
    url: string;
};

export interface IFileNameObj {
    name: string;
    mimetype: string; 
    url: string;
};

export interface IFileObject { 
    file: IFile, 
    info: IFileInfoObject 
};

export interface IMessageObject {
    message: string;
}

export interface IBaseFileSrvice extends IAjvService {
    run: () => Promise<any>;   
    getFilePath: (fileObject: IFileObject) => string;
    createWriteStream: (filePath:string, flag: "a" | "w") => Observable<string>;
    observeWriteStream: (filePath:string, flag: "a" | "w") => any;
    getFileDetails: (filePath:string) => Promise<any>;
};  
 
export interface IFileUploadService extends IFileValidationService {
    execute: (fileObject:IFileObject) => Promise<IMessageObject>; 
};
 
export interface IFileUploadParams extends IFileUploadService {
    files: IFile[];
    context: string;
    info: IFileInfoObject
};