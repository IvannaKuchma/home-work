const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ===== CRUD (існуючі) =====
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.post('/bulk', userController.createManyUsers);
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUser);
router.patch('/bulk', userController.updateManyUsers);
router.put('/:id', userController.replaceUser);
router.delete('/:id', userController.deleteUser);
router.delete('/bulk', userController.deleteManyUsers);

// ===== НОВІ маршрути =====
router.get('/advanced/cursor', userController.getUsersWithCursor);
router.get('/advanced/stats', userController.getUserStats);

module.exports = router;
