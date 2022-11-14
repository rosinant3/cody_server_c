import { IUploadControllers } from './interface';
import fileUploadService from '../../../../../../utility/fileService/uploadService/fileUploadService';
import { IRequestParams } from '../../../../../../utility/fileService/uploadService/interface';
const Busboy = require('busboy');

const controllers:IUploadControllers = {
    create: async function (req, res, next) {

        const busboy = Busboy({ headers: req.headers }).
                                on('error', (error:Error)=>{
                                    next(error.message);
                                });
        req.pipe(busboy);
        
        const file = {
            contentRange: req.headers['content-range'],
            rangeStart: 0,
            name: ''
        }; 
        const info = {
            busboy: busboy, 
            type: 'incidents',
            fileId: req.headers['x-file-id'], 
            rawBody: req.rawBody
        };

        const service:IRequestParams = Object.create(fileUploadService);
              service.files = [ file ];
              service.info = info; 
        
        const data = await service.run().
                            catch((error:Error)=>{
                                next(error.message);
                            });
        
        //req.data = data;
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