import { ISelectParams } from '../../service/select/selectInterface';
import selectService from '../../service/select/selectService';
import { ISelectControllers } from './interface';

const controllers:ISelectControllers = {
    create: async function (req, res, next) {
    
        const context = req.session.context;
        const params = req.query;

        const service:ISelectParams = Object.create(selectService);
              service.params = params;
              service.context = context;
        const promise = await service.run().
                        catch((error:Error)=>{
                            next(error.message);
                        });
        
        next();

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