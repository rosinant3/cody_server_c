import { IRequestService } from './interface';
import fileValidationService from "../validation/fileValidationService/fileValidationService";
import { firstValueFrom } from 'rxjs';

const requestService: IRequestService = Object.create(fileValidationService);

requestService.execute = async function(fileObject) {

    const filePath = await this.getFilePath(fileObject);
    const filePath_ = await firstValueFrom(this.observeWriteStream(filePath, "w")) 
    .catch((e:string)=>{ 
        console.log(e);
        throw new Error(e);
    });
    return filePath_; 
};

export default requestService;