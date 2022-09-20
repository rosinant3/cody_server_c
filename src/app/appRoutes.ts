import incidentRoutes from './incidents/routes';
import { IRoutes } from './interface';

const appRoutes:IRoutes = {
    create: () => {
        incidentRoutes.create();
    }
};

export default appRoutes;