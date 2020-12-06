const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    isValid: { type: Boolean, default: true, required: true },
    status: { type: String, enum: ['admin', 'colab'], default: 'colab', required: true },
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo'}]
});

module.exports = mongoose.model('User', UserSchema);