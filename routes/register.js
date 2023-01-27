const express = require("express");
const { User } = require("../models/users");



const router = express.Router();


router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    const user = new User(req.body);
    try {
        user.save();
        res.send(user);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;