import { IServer } from './interface';
import app from '../app/cody';
const express = require('express');
const server: IServer = Object.create(app);
server.run = function () {

    this.app.listen(5000, () => { console.log(`Server running on http://localhost:5000`)});
    this.app.use(express.static('public'));
    this.app.get('/',function(req:any, res:any) {
        res.send('index.html');
        
    });

}; 
export default server;