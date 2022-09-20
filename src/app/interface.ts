const mysql = require('mysql');

export interface IRoutes {
    create: () => void;
}

export interface IdbService {
    con: typeof mysql;
}