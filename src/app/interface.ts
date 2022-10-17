const mysql = require('mysql');

export interface IRoutes {
    create: () => void;
}

export interface IdbService {
    con: typeof mysql;
}


export type props = { 
    type: string;
    minLength?: number;
    maxLength?: number;
    maxItems?: number; 
    minItems?: number; 
    items?: any;
};