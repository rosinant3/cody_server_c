import baseService from '../../baseFileService';
import { IUploadValidationService } from './interface';
import { schema, infoSchema } from './schema';

const fileUploadValidationService:IUploadValidationService = Object.create(baseService);

fileUploadValidationService.schemas = {
    file: schema,
    info: infoSchema
};

fileUploadValidationService.validate = async function(files, info) {

    const file = await this.selectFile(files); 
    const validFile = await this.ajv.validate(this.schemas.file, file);
    if (!validFile) throw new Error(this.ajv.errors);

    const validInfo = await this.ajv.validate(this.schemas.info, info);
    if (!validInfo) throw new Error(this.ajv.errors);
 
    const contentRange = file.contentRange;

    const match = contentRange.match(/bytes=(\d+)-(\d+)\/(\d+)/);
    if (!match) throw new Error('Invalid "Content-Range" Format.');

    const rangeStart = Number(match[1]);
    const rangeEnd = Number(match[2]);
    const fileSize = Number(match[3]);

    if (rangeStart >= fileSize || rangeStart >= rangeEnd || rangeEnd > fileSize) throw Error('Invalid "Content-Range" provided.');
    file.rangeStart = rangeStart;
    return { file: file, info: info };
};


export default fileUploadValidationService;