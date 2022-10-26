import { IStatusService } from './interface';
import statusValidationService from "../validation/statusValidationService/statusValidationService";
import busboyService from '../busboyService/busboyService';
import { IBusboyService } from '../busboyService/interfaces';
import { firstValueFrom } from 'rxjs';

const requestService: IStatusService = Object.create(statusValidationService);

requestService.execute = async function({ info, params }) {

    const filePath = params.filePath;
    const busboy = info.busboy;
    const service:IBusboyService = Object.create(busboyService);
          service.busboy = busboy; 
          await firstValueFrom(service.observeFileEquality(filePath))
                            .catch((e:string)=>{ 
                                throw new Error(e);
                            });

    const stats = await this.getFileDetails(filePath)
        .catch((err:Error) => {
            throw new Error('File is missing.');
        }); 
    
    return { size: stats.size }; 
};

export default requestService;