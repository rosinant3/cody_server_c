import { IdbService } from '../../../../interface';
import { Observable } from 'rxjs';
import { FieldInfo } from 'mysql';
import { ISelectParams } from '../../select/interface';

export interface ISelectModel extends IdbService {
    query: (params: ISelectParams) => Observable<{results?: Object[], fields?: FieldInfo[]}>;
};