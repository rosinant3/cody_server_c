import { IIncidentController } from "../interface";
import createControllers from './create/createControllers';
import selectControllers from './select/selectControllers';

const incidentController: IIncidentController = {
    create: createControllers,
    select: selectControllers
}; 

export default incidentController;