const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const TodoSchema = new Schema({
    title: { type: String, required: true },
    isDone: { type: Boolean, default: false, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    date: Date
});

module.exports = mongoose.model('Todo', TodoSchema);