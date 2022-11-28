import incidentRoutes from './incidents/routes';
import usersRoutes from './users/routes';
import blogRoutes from './blog/routes';
import { IRoutes } from './interface';

const appRoutes:IRoutes = {
    create: () => {
        incidentRoutes.create();
        blogRoutes.create();
        usersRoutes.create();
    }
};

export default appRoutes;