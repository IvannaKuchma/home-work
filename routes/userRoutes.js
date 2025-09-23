const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create
router.post('/', userController.createUser);
router.post('/bulk', userController.createManyUsers);

// Read
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

// Update
router.patch('/:id', userController.updateUser);
router.patch('/bulk', userController.updateManyUsers);
router.put('/:id', userController.replaceUser);

// Delete
router.delete('/:id', userController.deleteUser);
router.delete('/bulk', userController.deleteManyUsers);

module.exports = router;
