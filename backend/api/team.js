const { Router } = require("express");
const express = require("express");
const Team = require("../schema/Team");
const router = express.Router();

// route to fetch board members' details
router.get("/board", (req, res) => {

    Team.find((function(err,info){
        if(err){
            console.log(err);
        }
        else
        res.json(info);
    }))
    
})

// route to add board members' details
router.post("/board", (req, res) => {

    let info = new Team(req.body);
    info.save()
    .then( info => {
        res.status(200).json({'info':'info added'});
    }    )

    .catch(err =>{
        res.status(400).send('adding fail');
    });
    
});

module.exports = router