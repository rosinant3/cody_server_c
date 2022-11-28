import { ICreateParams } from '../../service/create/createInterface';
import { TExpressFunction } from '../../interface';

export interface ICreateRequest {
    body: ICreateParams;
    data: ICreateParams | any;
    session: {
        userId: number;
        userType: 'user' | 'ogranization';
    }
}

export interface ICreateResponse {
    send: any;
    sendStatus: any;
    next: any;
}

export interface ICreateControllers {
    create: TExpressFunction<ICreateRequest, ICreateResponse>;
    createFolder: TExpressFunction<ICreateRequest, ICreateResponse>;
    createSession: TExpressFunction<ICreateRequest, ICreateResponse>;
    response: TExpressFunction<ICreateRequest, ICreateResponse>;
};