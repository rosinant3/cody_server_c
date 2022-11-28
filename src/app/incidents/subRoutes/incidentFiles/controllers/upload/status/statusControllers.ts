import { IStatusControllers } from './interface';
import { IStatusParams } from '../../../../../../ralphs/fileService/statusService/interface';
import statusService from '../../../../../../ralphs/fileService/statusService/statusService';
const Busboy = require('busboy');

const controllers:IStatusControllers = {
    status: async function (req, res, next) {

        const busboy = Busboy({ headers: req.headers }).
        on('error', (error:Error)=>{
            next(error.message);
        });
        req.pipe(busboy);
 
        const context = req.session.context;
        const service:IStatusParams = Object.create(statusService);
              service.files = {
                filePath: req.headers['x-file-id']
              }; 
              service.info = {
                busboy: busboy
              };

        try {

            const data = await service.run();
            req.data = data;
            next(); 

        } catch (e:any) {
            next(e.message);
        }


    },
    response: function (req, res, next) {
        res.send(req.data);
    }
};

const statusControllers = [ 
    controllers.status,
    controllers.response
];

export default statusControllers;