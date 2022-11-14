import { TExpressFunction } from '../../../../../interface';

export interface IRequest {
    body: {}; 
    rawBody: {},
    busboy: any;
    data: {};
    files: {};
    pipe: any;
    headers: {
        'content-range': string;
        'x-file-id': string;
    };
    session: {
        context: string;
    };
};

export interface IResponse {
    send: any; 
    next: any;
};

export interface IUploadControllers {
    create: TExpressFunction<IRequest, IResponse>;
    response: TExpressFunction<IRequest, IResponse>;
};
