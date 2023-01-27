const express = require("express");

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


router.post('/show', (req, res) => {
    const { _id, note } = req.body;
    
});


router.post('/upload', (req,res)=> {
    
});

router.post('/delete/:id', (req, res) =>{
    
});


module.exports = router;