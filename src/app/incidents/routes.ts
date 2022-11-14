import server from '../cody';
import incidents from './controllers/controllers';
import incidentFilesRoutes from './subRoutes/incidentFiles/routes';
import { IRoutes } from '../interface';

const app = server.app; 

const incidentRoutes:IRoutes = {
    create: () => {

        app.post('/api/incidents/create', incidents.create);
        app.get('/api/incidents/select', incidents.select);

        incidentFilesRoutes.create();
    }
};

export default incidentRoutes;