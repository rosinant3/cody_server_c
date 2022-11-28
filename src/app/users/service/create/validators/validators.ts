import { firstValueFrom } from 'rxjs';
import { IValidators } from '../createInterface';
import model from '../model';
import schema from '../schema';

const validators:IValidators = {

    schemaValidator: async function(params) {
        const value = await this.schema.validateAsync(params);
        return value; 
    },
    validateDuplicateUsername: async function(username) {

      const select:{count:number;} = await firstValueFrom(this.model.countByUsernameModel.query({ username: username }));
      const count = select.count;
      if (count > 0) {
        throw new Error('Username already taken.');
      }
      return true;

    },
    validateDuplicateEmail: async function(email) {

      const select:{count:number;} = await firstValueFrom(this.model.countByEmailModel.query({ email: email }));
      const count = select.count;
      if (count > 0) {
        throw new Error('E-Mail already taken.');
      }
      return true;

    },
    model: model,
    schema: schema

};

export default validators;