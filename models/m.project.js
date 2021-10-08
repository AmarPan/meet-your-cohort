const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema({
    content: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName: String
}, {
    timestamps: true
}
)

const projectSchema = new mongoose.Schema({
    title: String,
    link: String,
    readMe: String,
    descript: String,
    feedbackType: String,
    feedbacks: [feedbackSchema],
    userName: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})


module.exports = mongoose.model('Project', projectSchema)