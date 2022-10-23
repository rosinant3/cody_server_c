import { IFilePathSchema } from './interface';

export const schema:IFilePathSchema = {
    type: "object",
    properties: {
      filePath: { type: "string", minLength: 1, maxLength: 4000 }
    },
    required: [ "filePath" ],
    additionalProperties: true
}; 

