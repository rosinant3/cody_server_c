import { ICreateControllers } from './interface';
import fileUploadService from '../../../../../utility/fileService/uploadService/fileUploadService';
import { IFileUploadParams } from '../../../../../utility/fileService/interface';
import allowedFiles from '../../../../../utility/fileService/allowedFiles/allowedFiles';

const info = {
    id: 5,
    type: 'incidents',
    allowedFiles: allowedFiles.allFiles,
    allowedFileTypes: allowedFiles.allFileTypes
};

const controllers:ICreateControllers = {
    create: async function (req, res, next) {
    
        const context = req.session.context;
        const body = req.body;
        const files = req.files['files']; 
 /*
        const service:IFileUploadParams = Object.create(fileUploadService);
              service.files = files; 
              service.context = context; 
              service.info = info;
        const data = await service.run(). 
                        catch((error:Error)=>{
                            next(error.message);
                        });
        req.data = data;
        */
        next();
    },
    response: function (req, res, next) {
        res.send('abcd');
    }
};

const createControllers = [ 
    controllers.create,
    controllers.response
];

export default createControllers;