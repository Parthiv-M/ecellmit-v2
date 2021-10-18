const { Router } = require("express");
const express = require("express")
const router = express.Router();

// route to fetch board members' details
router.get("/board", (req, res) => {

    router.find((function(err,info){
        if(err){
            console.log(err);
        }
        else
        res.json(info);
    }))
    
})

// route to add board members' details
router.post("/board", (req, res) => {

    
    
})

module.exports = router