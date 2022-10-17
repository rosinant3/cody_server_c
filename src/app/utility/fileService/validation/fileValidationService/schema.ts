import { IFileSchema, IInfoSchema } from './interface';

export const schema:IFileSchema = {
    type: "object",
    properties: {
      name: { type: "string", minLength: 1 },
      mimetype: { type: "string", minLength: 1 },
    },
    required: ["name", "mimetype"],
    additionalProperties: true
}; 

export const infoSchema:IInfoSchema = {
  type: "object",
  properties: {
    id: { type: "number" },
    type: { type: "string", minLength: 1 },
    allowedFiles: {     
      type: "array",
      items: [{ type: "string" }], 
      minItems: 1 
    },
    allowedFileTypes: { 
      type: "array",
      items: [{ type: "string" }],  
      minItems: 1 
    }
  },
  required: ["id", "type", "allowedFiles", "allowedFileTypes"],
  additionalProperties: true
};
