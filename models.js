const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    isValid: { type: Boolean, default: true, required: true },
    status: { type: String, enum:['admin', 'colab'], default: 'colab', required: true }
});

const TodoSchema = new Schema({
    title: { type: String, required: true },
    isDone: { type: Boolean, default: false, required: true },
    date: Date,
    user: UserSchema
});

module.exports = { 
    user: mongoose.model('User', UserSchema), 
    todo: mongoose.model('Todo', TodoSchema)
};