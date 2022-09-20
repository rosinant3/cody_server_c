import wss from './server';
import { ISocket } from './interface';

const room:ISocket = Object.create(wss);


export default room;