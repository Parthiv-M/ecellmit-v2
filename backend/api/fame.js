const express = require("express");
const Fame = require("../schema/Fame");
const router = express.Router();

// route to fetch hall of fame members' details
router.get("/alumni/:year", (req, res) => {
    try {
        let reso = await Fame.find({
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

// route to add hall of fame members' details
router.post("/alumni", (req, res) => {

   try {
        let fame = new Fame({
            startup: req.body.startup,
            logo: req.body.logo,
            founderName: req.body.founderName,
            position: req.body.position,
            photo: req.body.photo,
            social: req.body.social,
        });
        fame.save().then(() => {
            res.status(200).send({ success: true, message: "Added new famous Alumini" });
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ success: false, message: "Error fetching famous Alumini" });
        })  
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }


})

module.exports = router