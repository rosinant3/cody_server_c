import dbService from "../../../../dbService";
import { ICreateModel, IInsertResults } from './interface';
import { Observable } from 'rxjs';
import { FieldInfo, MysqlError } from 'mysql';
import sql from './sql';

const createModel:ICreateModel = Object.create(dbService);
 
createModel.query = function (params) {
    return new Observable(observer => { 
        this.con.query(sql.create, [ params.title, params.userId, params.url ], function (error:MysqlError, results: IInsertResults, fields:FieldInfo[]) {
            if (error) {
                observer.error(Error('Server Error'));
            } else { 
                observer.next({ insertId: results.insertId, fields });
            }
            observer.complete();
        });
    });
}; 


export default createModel;