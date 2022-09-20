import { WebSocketServer } from 'ws';
import { initFunction } from '../interface';


export interface IWss {
    server: WebSocketServer
};

export interface ISocket extends IWss {
    connect: initFunction
}