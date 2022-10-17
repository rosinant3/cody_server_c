import app from '../app/cody';
import { IFileUpload } from './interface';
const express = require('express');
const fs = require('fs');
const path = require('path'); 

const fileUpload:IFileUpload = Object.create(app);
fileUpload.initialize = function () {
    
    const dir = './public/incidents';
    if (!fs.existsSync(dir)){    
        fs.mkdirSync(dir);
    }

    this.app.use("/public", express.static(path.join(__dirname, 'public')));
    
};
export default fileUpload;