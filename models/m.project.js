const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema({
    content: String }, {
    timestamps: true
    }
)

const projectSchema = new mongoose.Schema({
   
    author: String,
    title: String,
    link: String,
    readMe: String,
    feedbacks: [feedbackSchema],
    test: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})


  module.exports = mongoose.model('Project', projectSchema)