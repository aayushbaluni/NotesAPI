const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const notes = require('./routes/notes');
const app = express();
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost/notes")
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));
app.listen(3000, ()=>{
    console.log("Listening");
})

app.use(body_parser.json());

app.use('/notes', notes);

app.get('/', (req, res) => {
    res.send("head to /notes to get details about notes.");
})

