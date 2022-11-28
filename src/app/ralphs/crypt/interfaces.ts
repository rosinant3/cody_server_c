import { Observable } from 'rxjs';

type hashPassword = (password: string, salt: number) => Observable<{ passwordHash:string }>; 
type comparePasswords = (password: string, hash:string) => Observable<{ match:boolean }>; 

export interface ICrypt {
    hashPassword: hashPassword;
    comparePasswords: comparePasswords;
};