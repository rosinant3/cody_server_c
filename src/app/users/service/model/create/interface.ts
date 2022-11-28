import { IdbService } from '../../../../interface';
import { ICreateParams } from '../../create/createInterface';
import { Observable } from 'rxjs';
import { FieldInfo } from 'mysql';

export interface ICreateModel extends IdbService {
    query: (params: ICreateParams) => Observable<{insertId: number, fields?: FieldInfo[]}>;
};

export interface IInsertResults {
    insertId: number;
};