const Project = require('../models/m.project')


module.exports = {
    create
}

function create(req, res){
    console.log(req.body)

    Project.findById(req.params.id, function(err, projectDocument){
        console.log(projectDocument, "<--projectDoc")
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        projectDocument.feedbacks.push(req.body)
        projectDocument.save(function(err){
            res.redirect(`/projects/${req.params.id}`)
        });
    });
}