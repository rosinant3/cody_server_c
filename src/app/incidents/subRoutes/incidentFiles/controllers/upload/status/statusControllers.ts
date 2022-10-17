import { IStatusControllers } from './interface';

/*
const info = {
    id: 5,
    type: 'incidents',
    allowedFiles: allowedFiles.allFiles,
    allowedFileTypes: allowedFiles.allFileTypes
};
*/

const controllers:IStatusControllers = {
    create: async function (req, res, next) {
    
        const context = req.session.context;
        const body = req.body;



        
        next();
    },
    response: function (req, res, next) {
        res.send('abcd');
    }
};

const statusControllers = [ 
    controllers.create,
    controllers.response
];

export default statusControllers;