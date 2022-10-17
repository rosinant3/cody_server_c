import { ISchema } from './interface';

const schema:ISchema = {
    type: "object",
    properties: {
      name: { type: "string", minLength: 1 },
    },
    required: ["name"],
    additionalProperties: false
};

export default schema;