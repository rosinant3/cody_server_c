import { IApp } from '../config/interface';
const express = require('express');
const server: IApp = {
    app: express()
};
export default server;