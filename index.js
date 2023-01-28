const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const notes = require('./routes/notes');
const login = require("./routes/login");
const register = require('./routes/register');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://mongo_db:27017/Notes")
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));
app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})

app.use(body_parser.json());

app.use('/notes', notes);
app.use('/login', login);
app.use('/register', register);
app.get('/', (req, res) => {
    res.send("head to /notes to get details about notes.");
})

