const joi = require('joi');

const update = joi.object({
    first_name: joi.string().allow("", null),
    last_name: joi.string().allow("", null),
});


module.exports = {
    update,
};
