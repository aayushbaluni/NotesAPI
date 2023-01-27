const express = require("express");
const { ObjectId } = require("mongodb");
const { Note } = require("../models/note");

const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        "info": [
            {
                "info1": "  head to /show to show  notes uploaded.",
                "info2": "  head to /upload to upload  notes uploaded.",
                "info3": "  head to /delete/giveid to delete notes of id number."
            }
        ]
    });
});


router.post('/show', async(req, res) => {
    const { _id } = req.body;
    if (!_id) return res.status(404).send("Please send an Identification id.");
    const result = await Note.find({ user: ObjectId(_id) });
    if (result.length==0)return res.send("No Notes!");
    res.send(result);
});


router.post('/upload', (req,res)=> {
    const { _id, note } = req.body;
    if (!_id || !note) return res.status(404).send("Please Provide Data Correctly.");
    const newNote = new Note({ user: ObjectId(_id), note: note });
    try {
        newNote.save();
        res.send(newNote);
    }
    catch (err) {
        res.send(err);
    }
});

router.post('/delete', async(req, res) =>{
    const { _id, note_id } = req.body;
    try {
        await Note.findOneAndDelete({ _id: note_id, user: _id });
        res.send("Deleted.");
    }
    catch (err) {
        res.send(err);
    }
});


module.exports = router;