const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;