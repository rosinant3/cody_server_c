import { IRunner } from './interfaces';
import imageProcessStrategy from './imageProcessStrategy/imageProcessStrategy';
import videoProcessStrategy from './videoProcessStrategy/videoProcessStrategy';
import fileProcessStrategy from './fileProcessStrategy/fileProcessStrategy';
import { IFileObject, IFile } from '../../interface';


const runner: IRunner | any = {

    start: async function (fileObject:IFileObject) {
        this.strategyHandler(fileObject.file);
        console.log(this.fileHandler); 
        console.log(fileObject);
        throw Error('Please stop.');
        const uploadedFile = await this.process(fileObject);
        return uploadedFile;
    },

    strategyHandler: async function (file:IFile) {
        if (file.mimetype.includes('image')) {
            this.setStrategy(imageProcessStrategy);
        } else if (file.mimetype.includes('video')) {
            this.setStrategy(videoProcessStrategy);
        } else {
            this.setStrategy(fileProcessStrategy);
        }
    },


};



export default runner;