const express = require('express');
const inputValidation = require('../../../middlewares/inputValidation');
const controller = require('./controller');
const validation = require('./validation');

// SETUP ROUTER
const router = express.Router();

/**
 * Get List User
 */
router.get(
    '/',
    controller.index
);

/**
 * Get Detail User
 */
router.get(
    '/:id',
    controller.detail
);

/**
 * Update One User
 */
router.put(
    '/:id',
    inputValidation(validation.update),
    controller.updateOne
);

/**
 * Delete One User
 */
router.delete(
    '/:id',
    controller.deleteOne
);

module.exports = router;
