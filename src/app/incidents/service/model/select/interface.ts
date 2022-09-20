import { IdbService } from '../../../../interface';
import { Observable } from 'rxjs';
import { FieldInfo } from 'mysql';
import { ISelectParams } from '../../select/selectInterface';

export interface ICountResults {
    "count(*)": number;
};

export interface ISelectModel extends IdbService {
    select: (params: ISelectParams) => Observable<{results?: Object[], fields?: FieldInfo[]}>;
    count: (case_:number) => Observable<{results?: ICountResults[], fields?: FieldInfo[]}>;
};