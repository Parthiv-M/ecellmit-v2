const { Router } = require("express");
const express = require("express");
const Team = require("../schema/Alum");
const router = express.Router();

// route to fetch board members' details
router.get("/pastboard/:year", (req, res) => {

    try {
        let reso = await Alum.find({

            category: req.params.year 
            
        });

        if(!reso) {
            res.status(401).send({ success: false, message: "Invalid category" });
        }

        res.status(200).send({ success: true, data: reso });
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }

    
    
})

// route to add board members' details
router.post("/pastboard", (req, res) => {

    try {
        let team = new Team({
            name: req.body.name,
            position: req.body.position,
            year: req.body.year,
            company: req.body.company,
            photo: req.body.photo,
            social: req.body.social,
            
        });
        team.save().then(() => {
            res.status(200).send({ success: true, message: "Added new pastboard" });
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ success: false, message: "Error fetching pastboard" });
        })  
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
    
});

module.exports = router