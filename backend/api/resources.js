const express = require("express")
const router = express.Router();

// route to fetch resources details by resource type
router.get("/:type", (req, res) => {
    
})

// route to add resources
router.post("/", (req, res) => {
    let info = new Resouces(req.body);
    info.save()
    .then( info => {
        res.status(200).json({'info':'info added'});
    }    )

    .catch(err =>{
        res.status(400).send('adding fail');
    });
    
})

module.exports = router