import { IBusboyService } from './interfaces';
import { Observable } from 'rxjs';
import baseFileService from '../../baseFileService';
const fs = require('fs');

const busboyService:IBusboyService = Object.create(baseFileService);


busboyService.observeBusboy = function(filePath:string) { 

     return new Observable(observer => { 

        this.busboy.on('file', async (_:any, file:any, info:{ filename: string; }) => {

            //this.fileObject.file.name = info.filename;
            //const filePath = await this.getFilePath(this.fileObject);

            const stats = await this.getFileDetails(filePath)
                                    .catch((e:Error)=>{
                                        observer.error('File not found.');
                                    });

            if (!stats) {
                observer.error('File not found.');
                return;
            }

            if (stats.size > this.fileObject.file.rangeStart) {
                observer.error(`Bad chunk provided. stats size: ${stats.size}, rangeStart: ${this.fileObject.file.rangeStart}`);
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

export default busboyService;