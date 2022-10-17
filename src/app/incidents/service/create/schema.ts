import { ISchema } from './interface';

const schema:ISchema = {
    type: "object",
    properties: {
      content: { type: "string", minLength: 1 },
      color: { type: "string", minLength: 1, maxLength: 100 },
      caseId: { type: "number" },
      dateTime: { type:"string", minLength: 1, maxLength: 100  },
      userId: { type: "number" },
      graphics: { type: "string", minLength: 1 }
    },
    required: ["content", "color", "caseId", "dateTime", "userId", "graphics"],
    additionalProperties: false
};

export default schema;