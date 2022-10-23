import { IStatusParams  } from '../../../../../../utility/fileService/validation/statusValidationService/interface';
import { ISizeObj  } from '../../../../../../utility/fileService/statusService/interface';
import { TExpressFunction } from '../../../../../interface';

export interface IStatusRequest {
    query: IStatusParams;
    data: ISizeObj;
    session: {
        context: string;
    };
};

export interface IStatusResponse {
    send: any;
    next: any;
};

export interface IStatusControllers {
    create: TExpressFunction<IStatusRequest, IStatusResponse>;
    response: TExpressFunction<IStatusRequest, IStatusResponse>;
};