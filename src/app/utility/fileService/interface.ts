import { props } from '../../interface';
import { IAjvService } from '../../baseService';
import { Observable } from 'rxjs';
import { IFileValidationService } from './validation/fileValidationService/interface';

export interface IFileObjectProps {
    name: props;
    mimetype: props;
};

export interface ISchema {
    type: string;
    required: any[];
    additionalProperties: boolean;
};

export interface IFileInfoObject {
    id: number;
    fileId: string;
    type: string;
    allowedFiles: string[];
    allowedFileTypes: string[];
    schema?: any;
    fileSchema?: any;
};

export interface IFile {
    name: string;
    data: any;
    size: number;
    encoding: string;
    tempFilePath: string;
    truncated: boolean;
    mimetype: string;
    md5: string;
    mv: any;
    length: number;
};

export interface IFileNameObj {
    name: string;
    mimetype: string; 
};

export interface IFileObject { 
    file: IFile, 
    info: IFileInfoObject 
};

export interface IBaseFileSrvice extends IAjvService {
    run: () => Promise<IFileObject>;   
    getFilePath: (fileObject: IFileObject) => string;
    createWriteStream: (filePath:string, flag: "a" | "w") => Observable<string>;
    observeWriteStream: (filePath:string, flag: "a" | "w") => any;
    getFileDetails: (filePath:string) => Promise<any>;
};  
 
export interface IFileUploadService extends IFileValidationService {
    execute: (fileObject:IFileObject) => void;
};
 
export interface IFileUploadParams extends IFileUploadService {
    files: IFile[];
    context: string;
    info: IFileInfoObject
};