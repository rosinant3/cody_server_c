import { ICreateRequest, ICreateResponse } from './controllers/create/interface';
import { ISelectRequest, ISelectResponse } from './controllers/select/interface';


export type TExpressFunction<T, V> = (req: T, res: V, next: any) => void;

export interface IIncidentController {
    create: TExpressFunction<ICreateRequest, ICreateResponse>[],
    select: TExpressFunction<ISelectRequest, ISelectResponse>[]
};

export interface IGraphics {

};