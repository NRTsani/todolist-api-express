const {User} = require('../user');
const mongoQuery = require('../../../utils/mongoQuery');

/**
 * Get List Data
 * @param {Object} params
 */
const list = async (params) => {
    // init aggregate pipelines
    let pipelines = [];

    // init filters
    let filters = [];

    // assign filters to pipelines
    if (filters.length > 0) {
        pipelines.push({$match: {$and: filters}});
    }

    // sort
    pipelines.push({
        $sort: mongoQuery.getSort(params.sort_by, 'created.at', params.sort_dir, 'desc'),
    });

    // get data
    const data = await User.aggregate(pipelines);

    // return
    return {
        data: data,
    };
};

/**
 * Find By ID
 * @param {String} id
 */
const findById = async (id) => {
    return User.findOne({_id: id});
};

/**
 * Find By Email
 * @param {String} email
 */
const findByEmail = async (email) => {
    return User.findOne({email: email});
};

/**
 * Create New Data
 * @param {Object} data
 */
const save = async (data) => {
    let user = new User(data);
    return user.save();
};

/**
 * Update One Data with filter ID
 * @param {String} id
 * @param {Object} data
 */
const updateOne = async (id, data) => {
    return User.findOneAndUpdate({_id: id}, data, {
        returnOriginal: false,
    });
};

/**
 * Delete One Data with filter ID
 * @param {String} id
 */
const deleteOne = async (id) => {
    return User.deleteOne({_id: id});
};

module.exports = {
    list,
    findById,
    findByEmail,
    save,
    updateOne,
    deleteOne,
};
