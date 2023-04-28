const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    logoBackground: {
        type: String,
        required: true,
    },
    position : {
        type: String,
        required: true,
    },
    postedAt : {
        type: Number,
        required: true,
    },
    contract : {
        type: String,
        required: true,
    },
    location : {
        type: String,
        required: true,
    },
    website : {
        type: String,
        required: true,
    },
    apply : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    requirements : {
        type: Object,
        required: true,
    },
    role : {
        type: Object,
        required: true,
    },
});

module.exports = mongoose.model("Job", JobSchema);
