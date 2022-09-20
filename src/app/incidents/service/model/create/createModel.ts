import dbService from "../../../../dbService";
import { ICreateModel, IInsertResults } from './interface';
import { Observable } from 'rxjs';
import { FieldInfo, MysqlError } from 'mysql';
import sql from './sql';

const createModel:ICreateModel = Object.create(dbService);

createModel.create = function (params) {

    return new Observable(observer => { 
        this.con.query(sql.create, params, function (error:MysqlError, results:IInsertResults[], fields:FieldInfo[]) {
            if (error) throw error;
            
            console.log(results);
        });
    });


};


export default createModel;