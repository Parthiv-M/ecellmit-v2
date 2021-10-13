const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    article: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    writers: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true 
    }
});

module.exports = blog = mongoose.model('Blog', Blog);