const Project = require('../models/m.project')


module.exports = {
    new: newProject,
    create,
    index,
    show,
}

function show(req, res){
    Project.findById(req.params.id, function(err, foundProject){
        console.log(foundProject);
        res.render('projects/v.p.show.ejs', {
            project: foundProject
        })
    })
}
// NEED TO FIX
function index(req, res){
    Project.find({}, function(err, projectsDocuments){
        res.render('projects/v.p.index.ejs', {
            projects: projectsDocuments
        })
    })
}

function newProject(req, res) {
    res.render('projects/v.p.new.ejs')
}

function create(req, res) {
    console.log(req.body)
    //req.body.age = parseInt(req.body.age)
    Project.create(req.body, function (err, createdProject) {
        if (err) {
            console.log(err);
            return res.redirect('/new')
        }

        console.log(createdProject, "<-- createdProject");
        res.redirect('/projects')
    })
}

// function index(req, res) {
//     Profile.find({}, function (err, profilesDocuments) {
//         console.log(profilesDocuments, ' <-- movie documents')
//         res.render('profiles/v.p.index', {
//             profiles: profilesDocuments
//         })
//     })
// }

// above functions have beenn reformatted
// for Mongoose and MongoDB

// function update(req, res) {
//     // The following will also do the job
//     // req.body.done = !!req.body.done;
//     Profile.update(req.params.id, req.body);
//     res.redirect('/profiles');
// }

// function edit(req, res) {
//     res.render('profiles/v.p.edit.ejs', {
//         profile: Profile.getOne(req.params.id)
//     });
// }

// function show(req, res) {
//     res.render('profiles/v.p.show.ejs', {
//         profile: Profile.getOne(req.params.id)
//     })
// }



// function deleteProfile(req, res) {
//     Profile.deleteOne(req.params.id)
//     res.redirect('/profiles');
// }

