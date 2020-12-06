const Todo = require('../models/Todo');

const getAllTodos = (req, res) =>{
        const { isDone, afterDate, beforeDate, userId } = req.params;
        let criteria = {};
        Todo.find({ criteria: criteria }).exec()
        .then((todos) => {
            if (isDone === undefined) {
                criteria = {};
        } else { 
            criteria = { isDone: isDone };
        };
        if (afterDate) {
            criteria.date = { $gte: afterDate };
        };
        if (beforeDate) {
            criteria.date = { $lte: beforeDate };
        }
        if (userId) {
            criteria = { userId: userId };
        }
        console.log(todos);
        res.send({ todos: todos });
    })
    .catch((error) => {
        res.status(400).send(error);
    })
}

const getOneTodo = (req, res) => {
    const { id } = req.params;
    Todo.findById(id)
    .then((todo) => {
        res.send(todo);
    })
    .catch((error) => {
        res.status(400).send(error);
    })
}

const createTodo = (req, res) => {
    const newTodo = new Todo({
        userId: req.body.userId,
        title: req.body.title,
        isDone: req.body.isDone,
        date: new Date
    })
    newTodo.save().
    then((newTodo) => {
        res.send(newTodo)
    })
    .catch((error) => {
        console.log(error);
        res.status(400).send(error);
    })
}

const deleteTodo = (req, res) => {
    const { id } = req.params;
    Todo.findByIdAndDelete(id, (err) => {
        if(err) return res.status(400).send('bad request !');
        return res.send(`task ${id} has been deleted !`);
    });
};

const putTodo = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    Todo.findByIdAndUpdate(id, {title: title}, (err, putReturn) => {
        if(err) return res.status(400).send('bad request !');
    return res.send(putReturn);
    });
};

module.exports = {
    getAllTodos: getAllTodos,
    getOneTodo: getOneTodo,
    createTodo: createTodo,
    deleteTodo: deleteTodo,
    putTodo: putTodo
}