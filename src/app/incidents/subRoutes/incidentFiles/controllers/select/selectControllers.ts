import { ISelectParams } from '../../service/select/interface';
import selectService from '../../service/select/selectService';
import { ISelectControllers } from './interface';

const controllers:ISelectControllers = {
    create: async function (req, res, next) {
    
        const context = req.session.context; 
        const params = req.query;

        const service:ISelectParams = Object.create(selectService);
              service.params = params;
              service.context = context; 
        
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

const createControllers = [ 
    controllers.create,
    controllers.response
];
export default createControllers;