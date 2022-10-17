import { v4 as uuidv4 } from 'uuid';
import { IRequestControllers } from './interface';
import requestService from '../../../../../../utility/fileService/requestService/requestService';
import { IRequestParams } from '../../../../../../utility/fileService/requestService/interface';
import allowedFiles from '../../../../../../utility/fileService/allowedFiles/allowedFiles';

const controllers:IRequestControllers = {
    create: async function (req, res, next) {

        const file = [ { name: req.body.name, mimetype: req.body.mimetype } ];
        const context = "abcd";
        const info = {
            fileId: uuidv4(),
            id: 5,
            type: 'incidents',
            allowedFiles: allowedFiles.allFiles,
            allowedFileTypes: allowedFiles.allFileTypes 
        };
console.log(req.body);
        const service:IRequestParams = Object.create(requestService);
              service.files = file; 
              service.context = context; 
              service.info = info;
        const fileId = await service.run(). 
                        catch((error:Error)=>{
                            next(error.message);
                        });
        req.data = { fileId: fileId };
        next();
    },
    response: function (req, res, next) {
        res.send(req.data);
    }
};

const requestControllers = [ 
    controllers.create,
    controllers.response
];

export default requestControllers;