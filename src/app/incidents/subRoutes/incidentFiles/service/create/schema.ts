import { ISchema } from './interface';

const schema:ISchema = {
    type: "object",
    properties: {
      url: { type: "string", minLength: 1, maxLength: 4000 },
      incident: { type: "number" },
      mimetype: { type: "string", minLength: 1, maxLength: 45 },
      lastModified: { type: "number" },
      size: { type: "number" }
    },
    required: ["url", "incident", "mimetype" ],
    additionalProperties: false
};

export default schema;