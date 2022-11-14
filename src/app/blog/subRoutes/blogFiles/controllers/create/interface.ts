import { ICreateParams } from '../../service/create/interface';
import { TExpressFunction } from '../../../../interface';
import { IFile } from '../../../../../utility/fileService/interface';

export interface ICreateRequest {
    body: ICreateParams;
    data: ICreateParams | any;
    files: {
        'files': IFile[]
    };
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