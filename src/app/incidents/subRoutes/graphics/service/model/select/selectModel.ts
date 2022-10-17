import dbService from "../../../../../../dbService";
import { ISelectModel, ICountResults } from './interface';
import { Observable } from 'rxjs';
import { FieldInfo, MysqlError } from 'mysql';
import sql from './sql';

const selectModel:ISelectModel = Object.create(dbService);

selectModel.query = function (params) {
    return new Observable(observer => { 
        this.con.query(sql.select, [ params.case_, params.hook, params.perPage ], 
            function (error:MysqlError, results:ICountResults[], fields:FieldInfo[]) {
              if (error) {
                observer.error(error);
              } else {
                observer.next({ results, fields });
              }
              observer.complete();
        });
    });
};

selectModel.count = function (case_) {
    return new Observable(observer => { 
        this.con.query(sql.count, [ case_ ], 
            function (error:MysqlError, results:ICountResults[] = [{ "count(*)": 0 }], fields:FieldInfo[]) {
              if (error) {
                observer.error(error);
              } else {
                observer.next({ results, fields });
              }
              observer.complete();
        });
    });
}

export default selectModel;