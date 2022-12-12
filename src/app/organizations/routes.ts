import server from '../cody';
import organization from './controllers/controllers';
import { IRoutes } from '../interface';
const app = server.app;

const incidentRoutes:IRoutes = {
    create: () => {
        app.post('/api/organizations/register', organization.create);
        app.get('/api/organizations/login', organization.select);
    }
};

export default incidentRoutes;