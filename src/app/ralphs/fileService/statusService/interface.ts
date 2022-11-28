
import { IAjvService } from '../../../baseService';
import { IFileValidationService } from '../validation/fileValidationService/interface';

export interface ISizeObj {
    size: number;
};

export interface IStatusObj {
    filePath: string;
};

export interface IInfoObj {
    busboy: any;
};

export interface IFileObj {
    params: IStatusObj,
    info: IInfoObj
};
 
export interface IBaseFileSrvice extends IAjvService {
    run: () => Promise<ISizeObj>;
}; 

export interface IStatusService extends IFileValidationService {
    execute: (params:IFileObj) => Promise<ISizeObj>;
};
 
export interface IStatusParams extends IStatusService {
    files: IStatusObj; 
    info: IInfoObj;
    context: string;
};