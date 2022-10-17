import createService from '../../service/create/createService';
import { ICreateParams } from '../../service/create/createInterface';
import { ICreateControllers } from './interface';

const controllers:ICreateControllers = {
    create: async function (req, res, next) {
    
        const params = req.body;
        const service:ICreateParams = Object.create(createService);
              service.params = params;
        const results = await service.run().
                        catch((error:Error)=>{
                            next({ message: error.message });
                        });
        
        next(results);
    },
    response: function (req, res, next) {

        res.send('here the response');
    }
};

const createControllers = [ 
    controllers.create,
    controllers.response
];
export default createControllers;