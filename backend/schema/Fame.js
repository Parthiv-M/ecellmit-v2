const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fame = new Schema({
    startup: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    founderName: {
        type: Array,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: "",
    },
    social: {
        instagram: String,
        linkedin: String,
        email: String,
        website: String
    }
});

module.exports = fame = mongoose.model('Fame', Fame);