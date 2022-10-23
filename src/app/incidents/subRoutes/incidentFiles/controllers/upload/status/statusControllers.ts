import { IStatusControllers } from './interface';
import { IStatusParams } from '../../../../../../utility/fileService/statusService/interface';
import statusService from '../../../../../../utility/fileService/statusService/statusService';

const controllers:IStatusControllers = {
    create: async function (req, res, next) {
     
        const context = req.session.context;
        const service:IStatusParams = Object.create(statusService);
              service.params = req.query;
        const data = await service.run(). 
              catch((error:Error)=>{
                  next(error.message);
              });
        req.data = data;
        next(); 
    },
    response: function (req, res, next) {
        res.send(req.data);
    }
};

const statusControllers = [ 
    controllers.create,
    controllers.response
];

export default statusControllers;