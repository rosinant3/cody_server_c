
import { IAjvService } from '../../../baseService';
import { IFileValidationService } from '../validation/fileValidationService/interface';

export interface ISizeObj {
    size: number;
};

export interface IStatusObj {
    filePath: string;
}
 
export interface IBaseFileSrvice extends IAjvService {
    run: () => Promise<ISizeObj>;
}; 

export interface IStatusService extends IFileValidationService {
    execute: (params:IStatusObj) => Promise<ISizeObj>;
};
 
export interface IStatusParams extends IStatusService {
    params: IStatusObj; 
    context: string;
};