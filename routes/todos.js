const express = require('express');
const router = express.Router();
const indexController = require('../controllers/todos');

router.get('', indexController.getAllTodos);

router.get('/:id', indexController.getOneTodo);

router.post('', indexController.createTodo);

router.delete('/:id', indexController.deleteTodo);

router.put('/:id', indexController.putTodo);


module.exports = router;