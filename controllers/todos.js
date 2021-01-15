const Todo = require('../models/Todo');

const createTodo = (req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
        isDone: req.body.isDone,
        userId: req.body.userId,
        date: new Date()
    });
    newTodo.save((err) => {
        if(err) res.status(400).send('bad request');
        return res.send(newTodo);
    });
}

const getAllTodos = (req, res) => {
    const { isDone, beforeDate, afterDate } = req.query; 
    let criteria = {};
    
    if (isDone === undefined) {
        criteria = {}
    } else {
        criteria = { isDone }
    };
    if (afterDate) {
        criteria.date = { $gte: afterDate };
    }
    if (beforeDate) {
        criteria.date = { $lte: beforeDate };
    }
    Todo.find( criteria, (err, todos) => {
        if (err) return res.status(400).send('bad request');
        return res.send({ todos: todos });
    })
    .populate('userId', 'lastname');
}

const getOneTodo = (req, res) => {
    const { id } = req.params;
    Todo.findById( id, (err, todo) => {
        if (err) return res.status(400).send('bad request');
        return res.send({ todo })
    })
    .populate('userId','firstname + lastname -_id');
}

const putTodo = (req, res) => {
    const { id } = req.params;
    const { title, isDone, date } = req.body;
    Todo.findByIdAndUpdate(id, { title: title, isDone: isDone, date: date }, (err, todo) => {
        if (err) return res.status(400).send('bad request');
        return res.send({ todo });
    });
}

const deleteTodo = (req, res) => {
    const { id } = req.params;
    Todo.findByIdAndDelete(id, (err, todo) => {
        if (err) return res.status(400).send('bad request');
        return res.send(`Task '${todo.title}' has been deleted !`);
    })
}

module.exports = {
    createTodo: createTodo,
    getAllTodos: getAllTodos,
    getOneTodo: getOneTodo,
    putTodo: putTodo,
    deleteTodo: deleteTodo
}