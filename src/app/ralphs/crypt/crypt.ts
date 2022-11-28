import { ICrypt } from './interfaces';
import { Observable } from 'rxjs';
const bcrypt = require('bcrypt');


const crypt:ICrypt = Object.create(null);

crypt.hashPassword = function (password, salt) {
    return new Observable(observer => { 
        bcrypt.hash(password, salt, function(error:Error, hash:string) {
            if (error) {
                observer.error(Error('Internal Server Error.'));
            } else { 
                observer.next({ passwordHash: hash });
            }
            observer.complete();
        });
    });
};

crypt.comparePasswords = function (password, hash) {
    return new Observable(observer => { 
        bcrypt.compare(password, hash, function(error:Error, result:boolean) {
            if (error) {
                observer.error(Error('Internal Server Error.'));
            } else { 
                observer.next({ match: result });
            }
            observer.complete();
        });
    });
};

export default crypt;