import { IdbService } from '../../../../interface';
import { IIncidentParams } from '../../create/interface';
import { Observable } from 'rxjs';
import { FieldInfo } from 'mysql';

export interface IInsertResults {
    insertId: number;
};

export interface ICreateModel extends IdbService {
    query: (params: IIncidentParams) => Observable<{insertId: number, fields?: FieldInfo[]}>;
};
