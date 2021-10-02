const Profile = require('../models/m.profile')

module.exports = {
    index,
    new: newProfile,
    create,
    delete: deleteProfile,
    show,
    template,
    edit,
    update,
}

function update(req, res) {
    // The following will also do the job
    // req.body.done = !!req.body.done;
    Profile.update(req.params.id, req.body);
    res.redirect('/profiles');
  }

function edit(req, res){
    res.render('profiles/v.p.edit.ejs', {
        profile: Profile.getOne(req.params.id)
      });
}

function template(req, res) {
    res.render('v.template.ejs')
}

function show(req, res){
    res.render('profiles/v.p.show.ejs', {
        profile: Profile.getOne(req.params.id)
    })
}

function index(req, res) {
    res.render('profiles/v.p.index.ejs', {
            profiles: Profile.getAll()
        })
}

function newProfile(req, res) {
    res.render('profiles/v.p.new.ejs')
}

function create(req, res) {
    Profile.create(req.body)
    res.redirect('/profiles')
}

function deleteProfile(req, res) {
    Profile.deleteOne(req.params.id)
    res.redirect('/profiles');
}

