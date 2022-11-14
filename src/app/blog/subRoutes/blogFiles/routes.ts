import server from '../../../cody';
import blogFiles from './controllers/controllers';
import { IRoutes } from '../../../interface';
const app = server.app; 

const blogFilesRoutes:IRoutes = {
    create: () => { 
        app.post('/blog/files/create', blogFiles.create);
        app.get('/blog/files/select', blogFiles.select);
 
        app.post('/blog/files/upload', blogFiles.upload);
        app.post('/blog/files/upload-request', blogFiles.uploadRequest);
        app.post('/blog/files/upload-status', blogFiles.uploadStatus);
    }
}; 

export default blogFilesRoutes;