import { IBaseFileSrvice, IFileObject, IFile } from './interface';
import { ajvService } from '../../baseService';
import { Observable } from 'rxjs';
import Stream from 'stream';
const util = require('util')
const fs = require('fs');

const baseFileService:IBaseFileSrvice | any = Object.create(ajvService);

baseFileService.run = function () {
    return this.validate(this.files, this.info).then((cleanObject:IFileObject) => this.execute(cleanObject));
};

baseFileService.getFilePath = function (fileObject:any):string {
    const file = fileObject.file; 
    const info = fileObject.info; 
    //`./uploads/${info.type}/file-${info.id}-${file.name}`;
    return `./public/uploads/${info.type}/file-${info.fileId}-${file.name}`;
};

baseFileService.selectFile = async function(files: IFile[]) {

    if (files.length === 0) throw Error('No file selected.');
    if (files.length > 1) throw Error('Only one file allowed.');
    const file = files[0] as unknown as IFile;
    return file;
};

baseFileService.createFileStream = function (filePath: string, flag: "a" | "w" | "r") {
    return fs.createWriteStream(filePath, { flags: flag });
};  

baseFileService.getFileBufferFromReadStream = function (filePath: string, flag: { start: number, end: number }):Observable<Buffer> {

    return new Observable(observer => { 

        const stream = fs.createReadStream(filePath, flag);
        const bufs: Buffer[] = [];
    
        stream.on('data', (chunk:any) => { 
            bufs.push(chunk);
        });

        stream.on('end', function(){
            const buffer = Buffer.concat(bufs);
            observer.next(buffer);
            observer.complete();
        });
     
        stream.on('error', (err:any) => {
            observer.error('File not found.');
        });
    });
};  

baseFileService.getFileBuffer = function (file:Stream):Observable<Buffer> {

    return new Observable(observer => { 

        const bufs: Buffer[] = [];

        file.on('error', (err:Error) => {
            observer.error('File invalid.');
        });

        file.on('data', (chunk:any) => {
            bufs.push(chunk);
        });

        file.on('end', function(){
            const buffer = Buffer.concat(bufs);
            observer.next(buffer);
            observer.complete();
        });


    });
};  
  
baseFileService.observeWriteStream = function (filePath:string, flag: "a" | "w" | "r"):Observable<string> {

    return new Observable(observer => { 
        const stream = baseFileService.createFileStream(filePath, flag);
        stream.on('error', (err:any) => {
            observer.error('File not created. Folder missing.');
        });
        stream.end();
        stream.on('finish', () => {
            observer.next(filePath);
            observer.complete();
        });
    });
};

baseFileService.getFileDetails = function (filePath:string) {
    return util.promisify(fs.stat)(filePath);
}

export default baseFileService;