import { IFileSchema, IInfoSchema } from './interface';

export const schema:IFileSchema = {
    type: "object",
    properties: {
      name: { type: "string", minLength: 1, maxLength: 4000 },
      url: { type: "string", minLength: 1, maxLength: 4000 },
      mimetype: { type: "string", minLength: 1, maxLength: 45 },
    },
    required: ["name", "mimetype", "url"],
    additionalProperties: true
}; 

export const infoSchema:IInfoSchema = {
  type: "object",
  properties: {
    parentId: { type: "number" },
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
  required: ["parentId", "type", "allowedFiles", "allowedFileTypes"],
  additionalProperties: true
};
