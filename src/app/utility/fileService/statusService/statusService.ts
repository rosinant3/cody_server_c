import { IStatusService } from './interface';
import statusValidationService from "../validation/statusValidationService/statusValidationService";
import { firstValueFrom } from 'rxjs';

const requestService: IStatusService = Object.create(statusValidationService);

requestService.execute = async function(params) {

    const filePath = params.filePath;
/*
    const stats = await this.getFileDetails(this.getFilePath(filePath))
      .catch(err => {
            throw new Error('File is missing.');
    });
*/
    return { size: 0 }; 
};

export default requestService;