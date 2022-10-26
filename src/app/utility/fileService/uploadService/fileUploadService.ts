import { IFileUploadService } from './interface';
import fileUploadValidationService from "../validation/uploadValidationService/uploadValidationService";
import busboyService from '../busboyService/busboyService';
import { firstValueFrom } from 'rxjs';
import { IBusboyService } from '../busboyService/interfaces';


const fileUploadService:IFileUploadService = Object.create(fileUploadValidationService);

fileUploadService.execute = async function(fileObject) {
   
    const busboy = fileObject.info.busboy;
    const filePath = fileObject.info.fileId;
    const service:IBusboyService = Object.create(busboyService);
          service.busboy = busboy;
          service.fileObject = fileObject; 
          
    const busObserver = await firstValueFrom(service.observeBusboy(filePath))
                            .catch((e:string)=>{
                                throw new Error(e);
                            });
    console.log('finished observing');
    console.log(busObserver);
    return { message: busObserver.message };
};


export default fileUploadService;