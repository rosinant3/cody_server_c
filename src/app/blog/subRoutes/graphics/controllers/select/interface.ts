import { ISelectParams } from '../../service/select/interface';
import { TExpressFunction } from '../../interface';

export interface ISelectRequest {
    query: ISelectParams;
    data: ISelectParams | any;
    session: {
        context: string;
    }
}

export interface ISelectResponse {
    send: any;
    next: any;
}


export interface ISelectControllers {
    create: TExpressFunction<ISelectRequest, ISelectResponse>;
    response: TExpressFunction<ISelectRequest, ISelectResponse>;
};