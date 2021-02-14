const Joi = require('joi');


module.exports = function validate(data) {

    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
            .required(),
         

        password: Joi.string()
         //   .pattern(new RegExp('^[a-zA-Z0-9]{4}$'))
            .required()
            .min(4)
            
    });
    const { error }= schema.validate(data)
   
   return error
}

