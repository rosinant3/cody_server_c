import wss from './server';
import { ISocket } from './interface';

const socket:ISocket = Object.create(wss);
socket.connect = () => {
    socket.server.on('connection', function connection(ws) {

        console.log("user connected");
    
    });
};


export default socket;