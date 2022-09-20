import server from '../cody';
import incidents from './controllers/controllers';
import { IRoutes } from '../interface';
const app = server.app;

const incidentRoutes:IRoutes = {
    create: () => {
        app.post('/incidents/create', incidents.create);
        app.get('/incidents/select', incidents.select);
    }
};

export default incidentRoutes;