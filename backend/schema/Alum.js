const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alum = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    company: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    social: {
        instagram: String,
        linkedin: String,
        email: String
    }
});

module.exports = team = mongoose.model('Team', Team);