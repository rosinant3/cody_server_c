import app from '../app/cody';
import { IAccessControl } from './interface';
const accessControl:IAccessControl = Object.create(app);
accessControl.initialize = function () {
    this.app.use(function(req :any, res :any, next :any) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
        res.header("Access-Control-Allow-Headers", 
        "Content-Type, Authorization, X-Requested-With, x-file-id, content-range")
        res.header("Access-Control-Allow-Credentials", 'true');
        if (req.method === "OPTIONS") {
            return res.status(200).end();
        }
        next();
    });
};
export default accessControl;