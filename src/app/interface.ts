const mysql = require('mysql');


export interface IInsertResults {
    insertId: number;
};

export interface IRoutes {
    create: () => void;
};

export interface IdbService {
    con: typeof mysql;
};

export interface SessionInterface {
    userId: number;
    organizationId: number;
    userType: 'user' | 'organization';
};

export type props = { 
    type: string;
    errorMessage?: {
        type: string;
        missingProperty: string;
        required: string;
    };
    minLength?: number;
    maxLength?: number;
    maxItems?: number; 
    minItems?: number; 
    items?: any;
};