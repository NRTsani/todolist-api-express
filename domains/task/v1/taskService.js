const taskConstant = require('./taskConstant');
const repository = require('./repository');
// const taskHelper = require('./taskHelper'); comment or delete when not used
const errorHelper = require('../../../libraries/error');

/**
 * Get List Task
 * @param {Object} query values for filtering needs
 */
const index = async (query) => {
    // get data
    const tasks = await repository.list(query);

    return {
        data: tasks
    };
};

/**
 * Create New Task
 * @param {Object} body
 */
const create = async (body) => {
    // init new task data
    let newTask = {
        description: body.description,
        status: taskConstant.TASK_STATUS_ACTIVE,
        user_id: body.user_id,
    };

    // create task
    let createdTask = await repository.create(newTask);
    if (!createdTask) errorHelper.throwInternalServerError("Create New Task Failed");

    return {
        task: createdTask
    };
};

/**
 * Get Detail Task
 * @param {String} id
 */
const detail = async (id) => {
    const task = await repository.findById(id);
    if (!task) errorHelper.throwNotFound("Task Not Found");
    return {
        task: task
    };
};

/**
 * Update One Task
 * @param {String} id
 * @param {Object} body
 */
const updateOne = async (id, body) => {
    const task = await repository.findById(id);
    if (!task) errorHelper.throwNotFound("Task Not Found");

    // update task data
    let updateData = {
        description: task.description,
        status: task.status
    };
    if (body.description && body.description !== "") {
        updateData.description = body.description;
    }
    if (body.status && body.status !== "") {
        updateData.status = body.status;
    }

    // update task
    let updatedTask = await repository.updateOne(id, body);
    if (!updatedTask) errorHelper.throwInternalServerError("Update Task Failed");

    return {
        task: updatedTask
    };
};

/**
 * Delete One Data
 * @param {String} id
 */
const deleteOne = async (id) => {
    const task = await repository.findById(id);
    if (!task) errorHelper.throwNotFound("Task Not Found");

    // update task
    let result = await repository.deleteOne(id);
    if (!result) errorHelper.throwInternalServerError("Delete Task Failed");

    return result;
};

const deleteAll = async () => {

    // update task
    let result = await repository.deleteAll;
    if (!result) errorHelper.throwInternalServerError("Empty Task Failed");

    return result;
};

module.exports = {
    index,
    create,
    detail,
    updateOne,
    deleteOne,
    deleteAll
};
