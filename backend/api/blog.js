const express = require("express");
const Blog = require("../schema/Blog");

const router = express.Router();

// route to fetch resources details by resource type
router.get("/blog", async (req, res) => {
    try {
        let reso = await Blog.find({
            
        });

        if(!reso) {
            res.status(401).send({ success: false, message: "Invalid category" });
        }

        res.status(200).send({ success: true, data: reso });
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

// route to add resources
router.post("/blog", (req, res) => {
    try {
        let resource = new Blog({
            article: req.body.article,
            photo: req.body.photo,
            writer: req.body.writer,
            date: req.body.date,
            url: req.body.url,
            excerpt: req.body.excerpt,
        });
        resource.save().then(() => {
            res.status(200).send({ success: true, message: "Added new blog" });
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ success: false, message: "Error fetching blog" });
        })  
    } catch (error) {
        res.status(500).send({ success: false, message: "Server error" })
    }
})

module.exports = router