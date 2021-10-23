const express = require("express")
const router = express.Router();

// route to fetch hall of fame members' details
router.get("/alumni/:year", (req, res) => {

    let type = req.params.year;
    Resouces.findByType(type, function(err,info){
        res.json(info);
    });
    
})

// route to add hall of fame members' details
router.post("/alumni", (req, res) => {

    let info = new Fame(req.body);
    info.save()
    .then( info => {
        res.status(200).json({'info':'info added'});
    }    )

    .catch(err =>{
        res.status(400).send('adding fail');
    });

})

module.exports = router