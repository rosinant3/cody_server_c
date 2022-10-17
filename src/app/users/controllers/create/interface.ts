import { ICreateParams } from '../../service/create/createInterface';
import { TExpressFunction } from '../../interface';

export interface ICreateRequest {
    body: ICreateParams;
    data: ICreateParams | any;
    session: {
        context: string;
    }
}

export interface ICreateResponse {
    send: any;
    next: any;
}

export interface ICreateControllers {
    create: TExpressFunction<ICreateRequest, ICreateResponse>;
    response: TExpressFunction<ICreateRequest, ICreateResponse>;
};