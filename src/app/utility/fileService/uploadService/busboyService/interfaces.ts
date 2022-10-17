import { Observable } from 'rxjs';
import { IFileObject } from '../interface';
import { IBaseFileSrvice } from '../interface';

export interface IBaseBusboy {
    onFile: (_: any, file: any, fileName: string) => void;
};
//
export interface IBusboyService extends IBaseFileSrvice {
    fileObject: IFileObject;  
    busboy: any;
    observeBusboy: (rawBody:any) =>  Observable<{ message: string; }>;
};