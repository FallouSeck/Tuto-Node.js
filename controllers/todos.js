const Todo = require('../models').todo;

const createTodo = (req, res) => {
    let newTodo;
    
    if (req.body.user === undefined) {
        newTodo = new Todo({
            title: req.body.title,
            isDone: req.body.isDone,
            date: Date.now()
        });
    } else {
        newTodo = new Todo({
            title: req.body.title,
            isDone: req.body.isDone,
            date: Date.now(),
            user: req.body.user
        });
    }

    return newTodo.save()
    .then((savedTodo) => {
        return res.send(savedTodo);
    })
    .catch((error) => { 
        return res.status(500).send(error);
    })  
};

const getAllTodos = (req, res) => {
    const { isDone, beforeDate, afterDate } = req.query;

    let criteria = {};

    if (isDone === undefined) {
        criteria = { };
    } else {
        criteria.isDone = isDone;
    }
    if (beforeDate) criteria.date = { $lte: beforeDate };
    if (afterDate) criteria.date = { $gte: afterDate };

    return Todo.find(criteria)
    .then((todos) => {
        return res.send( {todos} );
    })
    .catch((error) => {
        return res.status(500).send(error);
    })
}

const getOneTodo = (req, res) => {
    const { id } = req.params;
    return Todo.findById(id)
    .then((todo) => {
        return res.send( {todo} );
    })
    .catch((error) => {
        return res.status(404).send("L'identifaint saisi n'est pas valide ou inconnu" + error);
    })
}

const putTodo = (req, res) => {
    const { id } = req.params;
    const { title, isDone, date } = req.body;
    let criteria = {};

    if(title) criteria.title = title;
    if(isDone) criteria.isDone = isDone;
    if(date) criteria.date = date;

    return Todo.findByIdAndUpdate(id, criteria)
    .then((updatedTodo) => {
        return res.send(updatedTodo);
    })
    .catch((error) => {
        return res.status(400).send(error);
    })
}

const deleteTodo = (req, res) => {
    const { id } = req.params;
    return Todo.findByIdAndDelete(id)
    .then((deleteTodo) => {
        return res.send(`Task ${deleteTodo.title} has been deleted !`);
    })
    .catch((error) => {
        return res.status(400).send(error);
    })
}

module.exports = {
    createTodo: createTodo,
    getAllTodos: getAllTodos,
    getOneTodo: getOneTodo,
    putTodo: putTodo,
    deleteTodo: deleteTodo
};