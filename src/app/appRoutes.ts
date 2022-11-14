import incidentRoutes from './incidents/routes';
import blogRoutes from './blog/routes';
import { IRoutes } from './interface';

const appRoutes:IRoutes = {
    create: () => {
        incidentRoutes.create();
        blogRoutes.create();
    }
};

export default appRoutes;