import server from '../../../cody';
import incidentFiles from './controllers/controllers';
import { IRoutes } from '../../../interface';
const app = server.app; 

const incidentFilesRoutes:IRoutes = {
    create: () => { 
        app.post('/incidents/files/create', incidentFiles.create);
        app.get('/incidents/files/select', incidentFiles.select);
 
        app.post('/incidents/files/upload', incidentFiles.upload);
        app.post('/incidents/files/upload-request', incidentFiles.uploadRequest);
        app.post('/incidents/files/upload-status', incidentFiles.uploadStatus);
    }
}; 

export default incidentFilesRoutes;