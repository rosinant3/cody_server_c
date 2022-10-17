import server from '../../../cody';
import user from './controllers/controllers';
import { IRoutes } from '../../../interface';
const app = server.app;

const incidentRoutes:IRoutes = {
    create: () => {
        //app.post('/user/register', user.create);
        app.get('/graphics/login', user.select);
    }
};

export default incidentRoutes;