import { IFileObject, IFile } from '../../interface';
import { IFileUploadManager } from './fileUploadManager/interfaces';
import { IFileUploadService } from '../../interface';

interface IProcessedFileObject {


};

type processType = (file:IFileObject) => Promise<IProcessedFileObject>;

export interface fileUploadStrategy {
    process: processType;
};
  
export interface IFileManager extends IFileUploadManager {
    fileHandler: fileUploadStrategy;
}; 

export interface fileUploadManagerPrototype extends IFileManager {
    setStrategy: (fileHandler:fileUploadStrategy) => void;
    process: processType; 
};

export interface IRunner extends IFileUploadService {
    start: (fileObject:IFileObject) => void;
    strategyHandler: (file:IFile) => void;
};
