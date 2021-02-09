const User = require('../models').user;

const createUser = (req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        isValid: req.body.isValid,
        status: req.body.status
    })
    return newUser.save()
    .then((savedUser) => {
        return res.send(savedUser);
    })
    .catch((error) => {
        return res.status(500).send(error);
    })
}

const getAllUsers = (req, res) => {
    const { status, isValid } = req.query;
    let criteria = {};

    if(status) criteria.status = status;
    if(isValid) criteria.isValid = isValid;

    return User.find(criteria)
    .then((users) => {
        return res.send(users);
    })
    .catch((error) => {
        return res.status(400).send(error);
    })
}

const getOneUser = (req, res) => {
    const { id } = req.params;
    return User.findById(id)
    .then((user) => {
        return res.send(user);
    })
    .catch((error) => {
        return res.status(400).send(error);
    })
}

const putUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, status, isValid } = req.body;
    let criteria = {};

    if(firstname) criteria.firstname = firstname;
    if(lastname) criteria.lastname = lastname;
    if(status) criteria.status = status;
    if(isValid) criteria.isValid = isValid;

    return User.findByIdAndUpdate(id, criteria)
    .then((updatedUser) => {
        return res.send(updatedUser);
    })
    .catch((error) => {
        return res.status(400).send(error);
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    return User.findByIdAndDelete(id)
    .then((deletedUser) => {
        return res.send(`User ${deletedUser.firstname} ${deletedUser.lastname} has been deleted !`);
    })
    .catch((error) => {
        return res.status(400).send(error);
    })
}


module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getOneUser: getOneUser,
    putUser: putUser,
    deleteUser: deleteUser
}