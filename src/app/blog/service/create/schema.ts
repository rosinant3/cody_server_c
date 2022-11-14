const Joi = require('joi');


const schema = Joi.object({
  title: Joi.string()
      .min(1)
      .max(100)
      .required()
      .label('Title'),

  url: Joi.string()
      .min(1)
      .max(300)
      .required()
      .label('Url'),

  userId: Joi.number()
  .integer()
  .required()
  .label('User Identification')
});


export default schema;