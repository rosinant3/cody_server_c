const Joi = require('joi');

const schema = Joi.object({
    orgName: Joi.string()
      .min(1)
      .max(100)
      .required()
      .label('First Name'),
    username: Joi.string()
      .min(3)
      .max(100)
      .alphanum()
      .required()
      .label('Username'),
    password: Joi.string()
      .min(8)
      .max(127)
      .required()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/)
      .message('Password must contain uppercase, lowercase, special characters and numbers')
      .label('Password'),
    repeatPassword: Joi.ref('password'),
    email: Joi.string()
      .min(1)
      .max(320)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .label('E-Mail')
});


export default schema;