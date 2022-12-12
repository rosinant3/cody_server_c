import dbService from "../../../../dbService";
import { ICountByEmailModel, IInsertResults } from './interface';
import { Observable } from 'rxjs';
import { FieldInfo, MysqlError } from 'mysql';
import sql from './sql';

const countByEmailModel:ICountByEmailModel = Object.create(dbService);

countByEmailModel.query = function (params) {
 
    return new Observable(observer => { 
        this.con.query(sql.count, params, function (error:MysqlError, results:IInsertResults[], fields:FieldInfo[]) {
            if (error) {
                observer.error(error);
            } else { 
                observer.next({ count: results[0]['COUNT(*)'] }); 
            }
            observer.complete();
        });
    });
};


export default countByEmailModel;