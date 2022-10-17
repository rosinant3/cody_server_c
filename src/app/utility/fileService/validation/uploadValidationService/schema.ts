import { IFileSchema, IFileInfoSchema } from './interface';

export const schema:IFileSchema = {
    type: "object",
    properties: {
        contentRange: { type: "string", minLength: 1 }
    },
    required: [ "contentRange" ],
    additionalProperties: true
}; 

export const infoSchema:IFileInfoSchema = {
    type: "object",
    properties: {
        fileId: { type: "string", minLength: 1 },
    },
    required: [ "fileId" ],
    additionalProperties: true
}; 