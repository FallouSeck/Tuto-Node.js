const express = require('express');
const router = express.Router();
const indexController = require('../controllers/users');

router.get('', indexController.getAllUsers);

router.get('/:id', indexController.getTodoByUser);

router.post('', indexController.createUser);

router.delete('/:id', indexController.deleteUser);

router.put('/:id', indexController.putUser);

module.exports = router;