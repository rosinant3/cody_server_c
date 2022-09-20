import { ISession } from './interface';
import app from '../app/cody';
import options from './databaseConfig';
const uuid = require('uuid').v4;
const expressSession = require('express-session');
const MySQLStore = require('express-mysql-session')(expressSession);
const geheim = uuid();
const sessionStore = new MySQLStore(options);
const session: ISession = Object.create(app);
session.initialize = () => {
  session.app.use(expressSession({
        genid: (req: any) => {
          return uuid(); // use UUIDs for session IDs
        },
        secret: geheim, //pick a random string to make 
        // the hash that is generated secure
        resave: false, //required
        saveUninitialized: false, //required
        store: sessionStore,
        cookie: {
          originalMaxAge: Number((6.307E+10).toFixed(20)),
          maxAge: Number((6.307E+10).toFixed(20)),
          expires: Number((6.307E+10).toFixed(20)),
        }
       })
    );
};
export default session;