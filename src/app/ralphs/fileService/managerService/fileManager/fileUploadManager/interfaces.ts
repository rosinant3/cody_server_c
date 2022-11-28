import { IFile } from '../../../interface';

export interface IUploadedFileObject {


}; 

export interface IFileUploadManager {
    upload: (file:IFile) => IUploadedFileObject;
};