import server from '../cody';
import user from './controllers/controllers';
import { IRoutes } from '../interface';
const app = server.app;

const usersRoutes:IRoutes = {
    create: () => {
        app.post('/api/users/register', user.create);
        app.get('/api/users/login', user.select);
    }
};

export default usersRoutes;