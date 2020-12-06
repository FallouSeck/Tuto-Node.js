const User = require('../models/User');

const getAllUsers = (req, res) => {
    const isValid = req.query.isValid;
    const status = req.query.status;
    const todos = req.query.todos;
    let criteria = {};

    if (status) {
        criteria = { status: status };
    }

    if (isValid) {
        criteria = { isValid: isValid };
    }

    if(todos) {
        criteria = { todos: todos };
    }

    User.find( criteria, (err, users) => {
        if(err) return res.status(400).send('bad request !');
        return res.send({ users: users });
    })
}

 const getTodoByUser = (req, res) => {
    const { id } = req.params;
    const user = User.findById(id, (err, todos) => {
        return res.send(todos);
    });
    user.populate('todos')
    return res.send('todos')
 }

const createUser = (req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        isValid: req.body.isValid,
        status: req.body.status
    });
    newUser.save((err) => {
        if(err) return res.status(400).send('bad request !');
        return res.send(newUser);
    });
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err) => {
        if(err) return res.status(400).send('bad request !');
        return res.send(`user ${id} has been deleted !`);
    });
};

const putUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, status } = req.body;
    let isSelected = {};

    if (firstname) {
        isSelected.firstname = firstname ;
    }

    if (lastname) {
        isSelected.lastname = lastname;
    }

    if (status) {
        isSelected.status = status;
    }
    console.log(isSelected);
    User.findByIdAndUpdate(id, isSelected, (err, putReturn) => {
        if(err) return res.status(400).send('bad request !');
    return res.send(putReturn);
    });
};


module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getTodoByUser: getTodoByUser,
    deleteUser: deleteUser,
    putUser: putUser
}