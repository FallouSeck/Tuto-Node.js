const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    isValid: { type: Boolean, default: true, required: true },
    status: { type: String, enum: ['admin', 'colab'], default: 'colab' },
});

module.exports = mongoose.model('User', UserSchema);
