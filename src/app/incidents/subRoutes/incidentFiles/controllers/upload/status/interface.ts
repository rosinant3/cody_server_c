import { IStatusParams } from '../../../service/upload/status/interface';
import { TExpressFunction } from '../../../../../interface';
import { IFile } from '../../../../../../utility/fileUploadService/interface';

export interface IStatusRequest {
    body: IStatusParams;
    data: IStatusParams | any;
    files: {
        'files': IFile[]
    };
    session: {
        context: string;
    }
};

export interface IStatusResponse {
    send: any;
    next: any;
};

export interface IStatusControllers {
    create: TExpressFunction<IStatusRequest, IStatusResponse>;
    response: TExpressFunction<IStatusRequest, IStatusResponse>;
};