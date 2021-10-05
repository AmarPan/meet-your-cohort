const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema({
    content: String }, {
    timestamps: true
    }
)

const projectSchema = new mongoose.Schema({
    userSharing: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    author: String,
    title: String,
    link: String,
    readMe: String,
    feedback: [feedbackSchema]
})


  module.exports = mongoose.model('Project', projectSchema)