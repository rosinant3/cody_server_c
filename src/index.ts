import server from './config/server';
import parsers from './config/parsers';
import accessControl from './config/accessControl';
import session from './config/session';
import fileUpload from './config/fileUpload';
import socket from './ws/socket';
import room from './ws/room';
import appRoutes from './app/appRoutes';

const startCody = () => {
    
    accessControl.initialize();
    parsers.initialize();
    fileUpload.initialize();
    socket.connect();
    server.run();
    session.initialize();
    appRoutes.create();
    parsers.errorHandlerInit();
};

startCody();