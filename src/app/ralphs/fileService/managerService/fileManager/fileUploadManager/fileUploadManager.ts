import { IFileUploadManager } from './interfaces';
import runner from '../runner';

const fileUploadManager: IFileUploadManager = Object.create(runner);

fileUploadManager.upload = function(file) {


        return file;
}

export default fileUploadManager;