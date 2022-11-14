import { IIncidentController } from "../interface";
import createControllers from './create/createControllers';
import selectControllers from './select/selectControllers';
import requestControllers from './upload/request/requestControllers';
import statusControllers from './upload/status/statusControllers';
import uploadControllers from './upload/upload/uploadControllers';

const blogController: IIncidentController = {
    create: createControllers,
    select: selectControllers,
    upload: uploadControllers,
    uploadRequest: requestControllers,
    uploadStatus: statusControllers
}; 

export default blogController;