const joi = require('joi');
const {joiPasswordExtendCore} = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);

const register = joi.object({
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    email: joi.string().required().email(),
    password: joiPassword.string()
        .minOfLowercase(5)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .minOfSpecialCharacters(1)
        .noWhiteSpaces()
        .onlyLatinCharacters()
        .required(),
});

const login = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
});

module.exports = {
    register,
    login,
};
