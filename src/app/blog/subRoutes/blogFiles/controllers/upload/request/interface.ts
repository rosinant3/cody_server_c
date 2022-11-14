import { TExpressFunction } from '../../../../../interface';
import { IFile, IFileNameObj} from '../../../../../../utility/fileService/interface';

interface IRequestParams {


};

export interface IRequest {
    body: IFileNameObj; 
    data: any;
    context: string;
    rawBody: {},
    busboy: any;
    files: {
        'files': IFile[]
    };
    pipe: any;
    headers: {
        'content-range': string;
        'x-file-id': string;
    },
    session: {
        context: string;
    }
};

export interface IResponse {
    send: any;
    next: any;
};

export interface IRequestControllers {
    create: TExpressFunction<IRequest, IResponse>;
    save: TExpressFunction<IRequest, IResponse>;
    response: TExpressFunction<IRequest, IResponse>;
};