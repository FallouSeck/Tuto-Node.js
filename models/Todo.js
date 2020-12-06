const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const TodoSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, required: true },
    isDone: { type: Boolean, default: false },
    date: Date
});

module.exports = mongoose.model('Todo', TodoSchema);