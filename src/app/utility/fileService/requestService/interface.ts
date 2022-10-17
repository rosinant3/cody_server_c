
import { IAjvService } from '../../../baseService';
import { IFileObject, IFileInfoObject, IFileNameObj } from '../interface';
import { IFileValidationService } from '../validation/fileValidationService/interface';

export interface IBaseFileSrvice extends IAjvService {
    run: () => Promise<IFileObject>;
};

export interface IRequestService extends IFileValidationService {
    execute: (fileObject:IFileObject) => void;
};
 
export interface IRequestParams extends IRequestService {
    files: IFileNameObj[]; 
    context: string; 
    info: IFileInfoObject;
};