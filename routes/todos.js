const express = require('express');
const router = express.Router();

const indexController  = require('../controllers/todos');

router.post('', indexController.createTodo);
router.get('', indexController.getAllTodos);
router.get('/:id', indexController.getOneTodo);
router.put('/:id', indexController.putTodo);
router.delete('/:id', indexController.deleteTodo);

module.exports = router;