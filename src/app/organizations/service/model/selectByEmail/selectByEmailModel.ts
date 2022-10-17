import dbService from "../../../../dbService";
import { ISelectModel } from './interface';
import { Observable } from 'rxjs';
import { FieldInfo, MysqlError } from 'mysql';
import sql from './sql';

const selectByEmailModel:ISelectModel = Object.create(dbService);

selectByEmailModel.query = function (params) {
    return new Observable(observer => { 
        this.con.query(sql.selectEmail, [ params.case_, params.hook, params.perPage ], 
            function (error:MysqlError, results: any, fields:FieldInfo[]) {
              if (error) {
                observer.error(error);
              } else {
                observer.next({ results, fields });
              }
              observer.complete();
        });
    });
};

export default selectByEmailModel;