import { v4 as uuidv4 } from 'uuid';
import { IRequestControllers } from './interface';
import requestService from '../../../../../../ralphs/fileService/requestService/requestService';
import { IRequestParams } from '../../../../../../ralphs/fileService/requestService/interface';
import allowedFiles from '../../../../../../ralphs/fileService/allowedFiles/allowedFiles';
import createService from '../../../service/create/createService';
import { ICreateParamsService } from '../../../service/create/interface';
 
const controllers:IRequestControllers = {
    create: async function (req, res, next) {

        const file = [ { name: req.body.name, mimetype: req.body.mimetype, url: req.body.url } ];
        const context = "abcd";
        const info = {
            fileId: uuidv4(),
            parentId: 5,
            type: 'incidents',
            allowedFiles: allowedFiles.allFiles,
            allowedFileTypes: allowedFiles.allFileTypes 
        };

        const service:IRequestParams = Object.create(requestService);
              service.files = file; 
              service.context = context; 
              service.info = info;
        const url = await service.run(). 
                        catch((error:Error)=>{
                            next(error.message);
                        });

        req.data = {
            url: `${file[0].url} ${url}`,
            incident: info.parentId,
            mimetype: file[0].mimetype
        };
        req.context = context;

        next();
    },
    save: async function (req, res, next) {

        const params = req.data;
        const context = req.context;

        const service:ICreateParamsService = Object.create(createService);
        service.params = params; 
        service.context = context; 
        const insertId = await service.run().
                  catch((error:Error)=>{ 
                      next(error.message);
                  });

        req.data = {
            ...params,
            id: insertId,
            uploaded: 0
        };
        next();

    },
    response: function (req, res, next) {
        res.send(req.data);
    }
};

const requestControllers = [ 
    controllers.create,
    controllers.save,
    controllers.response
];

export default requestControllers;