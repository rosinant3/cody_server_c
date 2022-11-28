import { fileUploadManagerPrototype, IFileManager } from './interfaces';
import fileUploadManager from './fileUploadManager/fileUploadManager';

const fileManagerPrototype:fileUploadManagerPrototype = Object.create(fileUploadManager);

fileManagerPrototype.setStrategy = function (handler) {
    this.fileHandler = handler;
};

fileManagerPrototype.process = function (fileObject) {
    return this.fileHandler.process(fileObject).then((fileObject:any)=>{
        return this.upload(fileObject);
    });
};

const fileManager:IFileManager = Object.create(fileManagerPrototype);
fileManager.fileHandler = { process: async () => {return {};} };

export default fileManager;