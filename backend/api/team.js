const express = require("express");
const Team = require("../schema/Team");
const router = express.Router();

// route to fetch board members' details
router.get("/board", (req, res) => {

    try {
        let reso = await Team.find({
            category: req.params
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
router.post("/board", (req, res) => {

    try {
        let team = new Team({
            category: req.body.name,
            position: req.body.position,
            photo: req.body.photo,
            social: req.body.social,
            
        });
        team.save().then(() => {
            res.status(200).send({ success: true, message: "Added new resource" });
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ success: false, message: "Error fetching resource" });
        })  
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
    
})

module.exports = router