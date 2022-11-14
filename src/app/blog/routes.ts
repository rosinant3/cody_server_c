import server from '../cody';
import blog from './controllers/controllers';
import blogFilesRoutes from './subRoutes/blogFiles/routes';
import { IRoutes } from '../interface';

const app = server.app; 

const blogRoutes:IRoutes = {
    create: () => {

        app.post('/api/blog/create', blog.create);
        app.get('/api/blog/select', blog.select);

        blogFilesRoutes.create();
    }
};

export default blogRoutes;