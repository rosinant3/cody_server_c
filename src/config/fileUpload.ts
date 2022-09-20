import app from '../app/cody';
import { IFileUpload } from './interface';
const express = require('express');
const expressFileUpload = require('express-fileupload');
const fileUpload:IFileUpload = Object.create(app);
fileUpload.initialize = function () {
    const fs = require('fs');
    const dir = './public/incidents';
    const path = require('path'); 
    if (!fs.existsSync(dir)){   
        fs.mkdirSync(dir);
    }
    this.app.use(expressFileUpload());
    this.app.use("/public", express.static(path.join(__dirname, 'public')));
};
export default fileUpload;