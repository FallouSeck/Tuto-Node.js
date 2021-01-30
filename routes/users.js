const express = require('express');
const router = express.Router();

const indexController = require('../controllers/users');

router.post('', indexController.createUser);
router.get('', indexController.getAllUsers);
router.get('/:id', indexController.getOneUser);
router.put('/:id', indexController.putUser);
router.delete('/:id', indexController.deleteUser);

module.exports = router;