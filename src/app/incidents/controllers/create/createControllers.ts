import createService from '../../service/create/createService';
import { ICreateParamsService } from '../../service/create/interface';
import { ICreateControllers } from './interface';

const controllers:ICreateControllers = {
    create: async function (req, res, next) {

        const context = req.session.context;
        const params = req.body;
        const service:ICreateParamsService = Object.create(createService);
              service.params = params; 
              service.context = context;
        
        try {
            
            const data = await service.run().
            catch((error:Error)=>{
                next(error.message);
            });
            req.data = data;

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