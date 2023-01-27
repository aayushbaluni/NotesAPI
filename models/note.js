const mongoose = require('mongoose');

const Note = mongoose.model("Notes", new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
    note: {type:String, required:true}
}))

module.exports = Note;