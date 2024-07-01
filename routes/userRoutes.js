const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

router.post(
    '/',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('role_id').isInt().withMessage('Valid role ID is required')
    ],
    userController.createUser
);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put(
    '/:id',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('role_id').isInt().withMessage('Valid role ID is required')
    ],
    userController.updateUser
);
router.delete('/:id', userController.deleteUser);

module.exports = router;
