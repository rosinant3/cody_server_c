import { IdbService } from '../../../../interface';
import { Observable } from 'rxjs';
import { FieldInfo } from 'mysql';

interface IEmail {
    email: string;
};

export interface ICountByEmailModel extends IdbService {
    query: (params: IEmail) => Observable<{count: number, fields?: FieldInfo[]}>;
};

export interface IInsertResults {
    'COUNT(*)': number;
};