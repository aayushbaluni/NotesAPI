const express = require("express");
const { User } = require("../models/users");

const router = express.Router();


router.post("/", async(req, res) => {
    const { email, password } = req.body;
    const result = await User.findOne({ email: email });
    if (!result) return res.status(404).send("User Not Found");
    if (result.password != password) return res.status(404).send("Incorrect Password!");
    res.send(result);
});


module.exports = router;