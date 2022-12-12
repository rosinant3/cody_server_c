import { IBaseService } from '../../../baseService';
import { ICreateModel } from '../model/create/interface';
import { ICrypt } from '../../../ralphs/crypt/interfaces';
import { ICountByUsernameModel } from '../model/countOrganizationByUsername/interface';
import { ICountByEmailModel } from '../model/countOrganizationByEmail/interface';
const Joi = require('joi');

type porps = { 
    type: string;
    minLength?: number;
    maxLength?: number;
    maxItems?: number; 
    minItems?: number; 
};

export interface ICreateParams {
    orgName: string;
    username: string;
    password: string;
    email: string;
    organizationId?:number;
    repeatPassword?: string; 
};

export interface ICreateDataProps {
    username: porps;
    email: porps;
    ogranization: porps;
    password1: porps;
    password2: porps;
};

interface ICreateModel_ {
    createModel: ICreateModel,
    countByUsernameModel: ICountByUsernameModel,
    countByEmailModel: ICountByEmailModel
};

export interface IValidators {
    schemaValidator: (prarams:ICreateParams) => Promise<ICreateParams>;
    validateDuplicateUsername: (username:string) => Promise<boolean>;
    validateDuplicateEmail: (email:string) => Promise<boolean>;
    model: ICreateModel_;
    schema: typeof Joi;
};


export interface ICreateService extends IBaseService {
    validate: (params :ICreateParams) => any;
    execute: (params: ICreateParams) => any;
    crypt: ICrypt;
    validators: IValidators; 
    model: ICreateModel_;
};

export interface ICreateParams extends ICreateService {
    params: ICreateParams;
    context: string;
}

export interface IValidationObject {
    schema: typeof Joi;
    data: any;
};