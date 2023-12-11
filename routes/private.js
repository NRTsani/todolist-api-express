const userApiV1 = require('../domains/user/v1/api');
const jwtValidation = require('../middlewares/jwtValidation');
const taskApiV1 = require('../domains/task/v1/taskAPI');

const setPrivateRoutes = (app) => {
    // set middleware
    app.use(jwtValidation());
    
    // set routes
    app.use('/api/v1/tasks', taskApiV1);
    app.use('/api/v1/users', userApiV1);
};

module.exports = setPrivateRoutes;
