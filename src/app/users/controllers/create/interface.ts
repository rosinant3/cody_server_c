import { ICreateParams } from '../../service/create/createInterface';
import { TExpressFunction } from '../../interface';
import { SessionInterface } from '../../../interface';

export interface ICreateRequest {
    body: ICreateParams;
    data: ICreateParams | any;
    session: SessionInterface;
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