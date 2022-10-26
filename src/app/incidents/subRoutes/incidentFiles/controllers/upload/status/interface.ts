import { IStatusParams  } from '../../../../../../utility/fileService/validation/statusValidationService/interface';
import { ISizeObj  } from '../../../../../../utility/fileService/statusService/interface';
import { TExpressFunction } from '../../../../../interface';

export interface IStatusRequest {
    data: ISizeObj;
    session: {
        context: string;
    };
    body: IStatusParams; 
    rawBody: {},
    busboy: any;
    files: {};
    pipe: any;
    headers: {
        'content-range': string;
        'x-file-id': string;
    };
}; 

export interface IStatusResponse {
    send: any;
    next: any;
};

export interface IStatusControllers {
    status: TExpressFunction<IStatusRequest, IStatusResponse>;
    response: TExpressFunction<IStatusRequest, IStatusResponse>;
};