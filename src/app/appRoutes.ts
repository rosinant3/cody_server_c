import incidentRoutes from './incidents/routes';
import usersRoutes from './users/routes';
import blogRoutes from './blog/routes';
import ogranizationRoutes from './organizations/routes';
import { IRoutes } from './interface';

const appRoutes:IRoutes = {
    create: () => {
        incidentRoutes.create();
        blogRoutes.create();
        usersRoutes.create();
        ogranizationRoutes.create();
    }
};

export default appRoutes;