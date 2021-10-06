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
    update
}

function edit(req,res){
    Project.findById(req.params.id, function(err, foundProject){
        console.log(foundProject);
        res.render('projects/v.p.edit.ejs', {
            project: foundProject
        })
    })

}

function update(req, res){
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedProject){
     console.log(updatedProject)
        res.redirect('/projects')
    })
  }

// function update(req,res){
//     // Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, foundProject){
//     //     console.log(foundProject);
//     Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, {
//         res.redirect('/projects');
//     })

// }

async function update2(req,res){

    try{
      const updatedProjectDocument = Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
      console.log(updatedProjectDocument, '<--updatedProjectDocument')
      res.redirect('/projects')
  
    }catch(err){
      console.log(err)
      res.send('There was an error in the update function', err)
    }
  }

// function update(req, res){
//     Project.create(req.params.id, req.body, function(err, updatedProject){
//         console.log(updatedProject, '<-- updatedProject')
//         res.redirect('/projects');
//     });
// }

function deleteProject(req, res){
    Project.deleteOne({_id: req.params.id}, function(err, deletedProject){
        if (err) { console.log(err, '<--- error')}
        console.log(deletedProject);
        res.redirect('/projects');
    });
}

function deleteOne(id){
    const idx = projects.findIndex(project => project.id === parseInt(id));
    projects.splice(idx, 1);
}

function show(req, res){
    Project.findById(req.params.id, function(err, foundProject){
        console.log(foundProject);
        res.render('projects/v.p.show.ejs', {
            project: foundProject
        })
    })
}

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

