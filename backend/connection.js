const mongoose = require('mongoose');

const userSchema = new mongoose.Schema();

const userModel = new mongoose.model('users', userSchema);

module.exports = userModel;
