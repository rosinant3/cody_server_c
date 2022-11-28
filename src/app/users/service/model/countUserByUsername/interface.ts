import { IdbService } from '../../../../interface';
import { Observable } from 'rxjs';
import { FieldInfo } from 'mysql';

interface IUsername {
    username: string;
};

export interface ICountByUsernameModel extends IdbService {
    query: (params: IUsername) => Observable<{count: number, fields?: FieldInfo[]}>;
};

export interface IInsertResults {
    'COUNT(*)': number;
};