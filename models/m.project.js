const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    content: String }, {
    timestamps: true
    }
)

const projectSchema = new mongoose.Schema({
    userSharing: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    projCreator: String,
    projName: String,
    projLink: String,
    projReadMe: String,
    projComments: [commentSchema]
})


  module.exports = mongoose.model('Project', projectSchema)