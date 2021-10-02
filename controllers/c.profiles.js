const Profile = require('../models/m.profile')

module.exports = {
    index,
    new: newProfile,
    create,
    delete: deleteProfile,
    show
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