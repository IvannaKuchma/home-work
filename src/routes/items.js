const express = require('express');
const router = express.Router();
const itemCtrl = require('../controllers/item.controller');

router.post('/', itemCtrl.createItem);
router.get('/', itemCtrl.getItems);
router.get('/:id', itemCtrl.getItem);
router.put('/:id', itemCtrl.updateItem);
router.delete('/:id', itemCtrl.deleteItem);

module.exports = router;