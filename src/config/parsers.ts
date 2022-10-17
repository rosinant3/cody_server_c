import app from '../app/cody';
import { IParsers } from './interface';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const parsers:IParsers = Object.create(app);
const jsonErrorHandler = (error:any, req:any, res:any, next:any) => {
    res.setHeader('Content-type', 'application/json');
    res.status(500).json({ error });
};
parsers.initialize = function () {
    
    this.app.use(cookieParser());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
};
parsers.errorHandlerInit = function () {
    this.app.use(jsonErrorHandler);
};
export default parsers;