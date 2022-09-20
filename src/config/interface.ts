const express = require('express');
import { initFunction } from '../interface';

export interface IApp {
    app: typeof express;
};

export interface ISession extends IApp {
    initialize: initFunction;
};

export interface IServer extends IApp {
    run: initFunction;
};

export interface IParsers extends IApp {
    initialize: initFunction;
    errorHandlerInit: initFunction;
};

export interface IAccessControl extends IApp {
    initialize: initFunction;
};

export interface IFileUpload extends IApp {
    initialize: initFunction;
}

