const Joi = require('joi');
const db = require('../db');

module.exports = {
    findByEmail(email){
        return db('users').where('email', email).first();
    },

    insert(user){
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email(),
            google_id: Joi.string().required(),
            role_id: Joi.number().required(),
            avatar: Joi.string().uri({
                scheme: [
                    /https/
                ]
            }),
            created_at: Joi.date().required(),
            updated_at: Joi.date().required()
        });
        const result = Joi.validate(user, schema);

        if(result.error === null){
            return db('users').insert(user);
        } else {
            return Promise.reject(result.error);
        }
    }
}