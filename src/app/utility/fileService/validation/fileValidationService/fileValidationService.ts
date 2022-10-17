import baseService from '../../baseFileService';
import { IFileValidationService } from './interface';
import { schema, infoSchema } from './schema';


const fileValidationService:IFileValidationService = Object.create(baseService);

fileValidationService.schemas = {
    file: schema,
    info: infoSchema
};

fileValidationService.validate = async function(files, info) {
     
    const file = await this.selectFile(files);
    const validInfo = await this.ajv.validate(this.schemas.info, info);
    if (!validInfo) throw new Error(this.ajv.errors);
    const validFile = await this.ajv.validate(this.schemas.file, file);
    if (!validFile) throw new Error(this.ajv.errors);
    const valid = await this.validateFileExtension(file, info); 
    if (!valid) throw new Error('Invalid file type.');

    return { file: file, info: info };
};

fileValidationService.validateFileExtension = async function(file, info) {

    const name = file.name; 
    const file_extension = await name.slice(
        ((name.lastIndexOf('.') - 1) >>> 0) + 2
    );
    const extensionAllowed = await info.allowedFiles.includes(file_extension);
    const extensionAllowedMime = await info.allowedFileTypes.includes(file.mimetype);
    return extensionAllowed && extensionAllowedMime;
};

export default fileValidationService;