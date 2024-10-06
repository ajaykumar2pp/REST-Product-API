const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: {
        type: String,
        default: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },

});

module.exports = mongoose.model('User', UserSchema);
