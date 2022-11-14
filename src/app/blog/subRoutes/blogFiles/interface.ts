import { ICreateRequest, ICreateResponse } from './controllers/create/interface';
import { ISelectRequest, ISelectResponse } from './controllers/select/interface';
import { IRequest, IResponse } from './controllers/upload/request/interface';
import { IStatusRequest, IStatusResponse } from './controllers/upload/status/interface';

export type TExpressFunction<T, V> = (req: T, res: V, next: any) => void;

export interface IIncidentController {
    create: TExpressFunction<ICreateRequest, ICreateResponse>[],
    select: TExpressFunction<ISelectRequest, ISelectResponse>[],

    upload: TExpressFunction<IRequest, IResponse>[],
    uploadRequest: TExpressFunction<IRequest, IResponse>[],
    uploadStatus: TExpressFunction<IStatusRequest, IStatusResponse>[],
};

export interface IGraphics {

};