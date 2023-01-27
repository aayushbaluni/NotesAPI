const mongoose = require('mongoose');

const User = mongoose.model("Users", new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        unique: true
    },
    password: {
        required: true,
        type: String,
        minlength: 5,
    },
    name: {
        type: String,
        minlength: 3,
        required: true
    }


}));

exports.User = User;

