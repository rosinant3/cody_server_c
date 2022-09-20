import options from '../config/databaseConfig';
import { Connection } from 'mysql';
const mysql = require('mysql');
const dbService: { con: Connection }= {
    con: mysql.createConnection(options)
};
export default dbService;