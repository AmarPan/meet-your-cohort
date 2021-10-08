const Project = require('../models/m.project')
const User = require('../models/m.user')


module.exports = {
    new: newProject,
    create,
    index,
    show,
    delete: deleteProject,
    deleteOne,
    edit,
    update,
    allProjects
}

function edit(req, res) {
    Project.findById(req.params.id, function (err, foundProject) {
        if (!foundProject.user.equals(req.user._id)) return res.redirect('/projects');
        res.render('projects/v.p.edit.ejs', {
            project: foundProject
        })
    })

}

function update(req, res) {
    Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, updatedProject) {
        res.redirect(`/projects/${updatedProject._id}`)
    })
}

function deleteProject(req, res) {
    Project.deleteOne({ _id: req.params.id }, function (err, deletedProject) {
        if (err) { console.log(err) }
        res.redirect('/projects/all');
    });
}

function deleteOne(id) {
    const idx = projects.findIndex(project => project.id === parseInt(id));
    projects.splice(idx, 1);
}

function show(req, res) {
    Project.findById(req.params.id, function (err, foundProject) {
        res.render('projects/v.p.show.ejs', {
            project: foundProject
        })
    })
}

function allProjects(req, res) {
    Project.find({}, function (err, projectsDocuments) {
        res.render('projects/v.p.allProjects.ejs', {
            projects: projectsDocuments
        })
    })
}

function index(req, res) {
    Project.find({ user: req.user._id }, function (err, projectsDocuments) {
        res.render('projects/v.p.index.ejs', {
            projects: projectsDocuments
        })
    })
}

function newProject(req, res) {
    res.render('projects/v.p.new.ejs')
}

function create(req, res) {
    Project.create(req.body, function (err, createdProject) {
        if (err) {
            console.log(err);
            return res.redirect('/new')
        }
        createdProject.user = req.user._id
        createdProject.userName = req.user.name
        createdProject.save(function (err) {
            res.redirect(`/projects/${createdProject._id}`)
        })

    })
}