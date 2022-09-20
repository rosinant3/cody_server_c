import { IdbService } from '../../../../interface';
import { ICreateParams } from '../../create/createInterface';
import { Observable } from 'rxjs';
import { FieldInfo } from 'mysql';

export interface ICreateModel extends IdbService {
    create: (params: ICreateParams) => Observable<{results?: Object[], fields?: FieldInfo[]}>;
};

export interface IInsertResults {

};