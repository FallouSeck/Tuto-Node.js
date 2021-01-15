const User = require('../models/User');

const createUser = (req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        isValid: req.body.isValid,
        status: req.body.status,
    });
    newUser.save((err) => {
        if (err) return res.status(400).send("bad request !");
        return res.send(newUser);
    });
}

const getAllUsers = (req, res) => {
    const { status, isValid, todos } = req.query;
    let criteria = {};

    if (isValid) {
        criteria.isValid = isValid;
    };
    if (status) {
        criteria.status = status;
    };
    User.find( criteria, (err, users) => {
        if (err) return res.status(400).send("bad request !");
        return res.send({ users: users });
    })

}

const getOneUser = (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) =>{
        if (err) return res.status(400).send("bad request !");
        return res.send({ user });
    });
}

const putUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, isValid, status } = req.body;
    let isSelected = {};
    
    if(firstname){
        isSelected.firstname = firstname;
    };
    if(lastname){
        isSelected.lastname = lastname;
    };
    if(isValid){
        isSelected.isValid = isValid;
    };
    if(status){
        isSelected.status = status;
    };
    User.findByIdAndUpdate( id, isSelected, (err, user) => {
        if (err) return res.status(400).send('bad request !');
        return res.send({ user });
    });
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err, user) => {
        if (err) return res.status(400).send('bad request !');
        return res.send(`User ${user.firstname} ${user.lastname} has been deleted !`);
    })
}

module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getOneUser: getOneUser,
    putUser: putUser,
    deleteUser: deleteUser
}