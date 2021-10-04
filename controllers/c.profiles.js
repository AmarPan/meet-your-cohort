const Profile = require('../models/m.profile')

Profile.create({
    name: 'Amar Pan',
    email: 'amar.panjwani@gmail.com',
    phone: '19512247077',
    grpChat: 'yes',
    li: 'https://www.linkedin.com/in/amarpan/',
    fb: 'https://www.facebook.com/apanj001',
    gh: 'https://github.com/amarpan',
    port: 'https://amarpan.com',
    proj1: 'https://github.com/amarpan/simon-game',
    proj2: 'https://github.com/amarpan/meet-your-classmates',
    proj3: '',
    proj4: '',
    loc: 'Apple Valley, CA',
    tZone: 'PST',
    bPlace: 'Alameda, CA, USA',
    eth: 'Indian',
    age: '32',
    bDay: '06/19/89',
    ed: 'M.A. Education, B.A. English, A.S. Comp Sci',
    work: 'Teacher',
    likes: 'dogs, roller coasters, tennis',
    dislikes: 'mornings, math, macs'
}, function (err, profileDoc) {
        console.log(profileDoc);
    });


module.exports = {
    index,
    new: newProfile,
    create,
    delete: deleteProfile,
    show,
    edit,
    update,
}

function newProfile(req, res) {
    res.render('profiles/v.p.new.ejs')
}

function create(req, res) {
    console.log(req.body)
    req.body.age = parseInt(req.body.age)
    req.body.grpChat = !!req.body.grpChat
    Profile.create(req.body)
    console.log(req.body)
    res.redirect('/profiles')
}

// above functions have beenn reformatted
// for Mongoose and MongoDB

function update(req, res) {
    // The following will also do the job
    // req.body.done = !!req.body.done;
    Profile.update(req.params.id, req.body);
    res.redirect('/profiles');
}

function edit(req, res) {
    res.render('profiles/v.p.edit.ejs', {
        profile: Profile.getOne(req.params.id)
    });
}

function show(req, res) {
    res.render('profiles/v.p.show.ejs', {
        profile: Profile.getOne(req.params.id)
    })
}

function index(req, res) {
    res.render('profiles/v.p.index.ejs', {
        profiles: Profile.getAll()
    })
}





function deleteProfile(req, res) {
    Profile.deleteOne(req.params.id)
    res.redirect('/profiles');
}

