import { IBusboyService } from './interfaces';
import { Observable, firstValueFrom } from 'rxjs';
import baseFileService from '../baseFileService';
import { Buffer } from 'node:buffer';
const fs = require('fs');

const busboyService:IBusboyService = Object.create(baseFileService);


busboyService.observeBusboy = function(filePath:string) { 

     return new Observable(observer => { 

        this.busboy.on('file', async (_:any, file:any, info:{ filename: string; }) => {

            const stats = await this.getFileDetails(filePath)
                                    .catch((e:Error)=>{
                                        observer.error('File not found.');
                                    });

            if (!stats) {
                observer.error('File not found.');
                return;
            }

            if (stats.size > this.fileObject.file.rangeStart) {
                observer.error(`Bad chunk provided. StatsSize: ${stats.size}, RangeStart: ${this.fileObject.file.rangeStart}`);
            }
            
            file.pipe(fs.createWriteStream(filePath, { flags: 'a' }));

        });
            
        this.busboy.on('error', (e:Error) => {
            observer.error(e);
        });
            
        this.busboy.on('finish', () => {
            observer.next({ message: 'Chunk uploaded.' });
            observer.complete();
        });

    });
};

busboyService.observeFileEquality = function(filePath:string) { 
 
    return new Observable(observer => { 

       this.busboy.on('file', async (_:any, file:any, info:{ filename: string; }) => {

            const buffer1:Buffer | any = await firstValueFrom(this.getFileBufferFromReadStream(filePath, { start: 1, end: 256000 }))
                                        .catch((e:string)=>{ 
                                            throw new Error(e);
                                        });
            const buffer2:Buffer | any = await firstValueFrom(this.getFileBuffer(file))
                    .catch((e:string)=>{ 
                        throw new Error(e);
                    });

            const fileSame = buffer1.equals(buffer2);

            if (!fileSame) {
                observer.error(new Error(`Files don't match.`));
            }

            observer.next({ message: 'Files are the same.' });
            observer.complete();
           
       });
           
       this.busboy.on('error', (e:Error) => {
           observer.error(e);
       });
   });
};

export default busboyService;