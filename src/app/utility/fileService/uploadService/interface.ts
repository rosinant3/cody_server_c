
import { IAjvService } from '../../../baseService';
import { IFileValidationService } from '../validation/fileValidationService/interface';
import { Observable } from 'rxjs';

export interface IFileNameObj {
    contentRange: string;
    rangeStart: number;
    name: string;
};

export interface IFileInfoObject {
    busboy: any; 
    rawBody: any;
    fileId: string;
};

export interface IFileObject { 
    file: IFileNameObj, 
    info: IFileInfoObject 
};

export interface IBaseFileSrvice extends IAjvService {
    run: () => Promise<IFileObject>;   
    getFilePath: (fileObject: IFileObject) => string;
    createWriteStream: (filePath:string, flag: "a" | "w") => Observable<string>;
    getFileDetails: (filePath:string) => Promise<any>;
}; 

export interface IRequestService extends IFileValidationService {
    execute: (fileObject:IFileObject) => void;
};

export interface IRequestParams extends IRequestService {
    files: IFileNameObj[]; 
    context: string; 
    info: IFileInfoObject;
};


export interface IFileUploadService extends IFileValidationService {
    execute: (fileObject:IFileObject) => void;
};
 