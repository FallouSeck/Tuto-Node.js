const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const TodoSchema = new Schema({
    title: { type: String, required: true },
    isDone: { type: Boolean, default: false, required: true },
    date: Date
});

module.exports = mongoose.model('Todo', TodoSchema);