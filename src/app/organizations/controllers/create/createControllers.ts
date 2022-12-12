import createService from '../../service/create/createService';
import { ICreateParams } from '../../service/create/createInterface';
import folderManager from '../../../ralphs/folderManager/folderManager';
import { ICreateControllers } from './interface';

const controllers:ICreateControllers = {
    create: async function (req, res, next) {
    
        const params = req.body;
        const service:ICreateParams = Object.create(createService);
              service.params = params;
            
        try {
             
            const data = await service.run();
            delete data.password;
            req.data = data;
            next();

        } catch(e:any) {
            next(e.message); 
        }

    },
    createFolder: async  function (req, res, next) {

        const data = req.data;
        const dir = `./public/uploads/organizations/${data.username}`;
        await folderManager.run(dir);
        data.directory = dir;
        next();
    },
    createSession: async function (req, res, next) {

        const id = req.data.id;
        req.session.organizationId = id;
        req.session.userType = 'organization';
        next();
    },
    response: function (req, res, next) {

        res.send(req.data);
    }
};

const createControllers = [ 
    controllers.create,
    controllers.createFolder,
    controllers.createSession,
    controllers.response
];
export default createControllers;