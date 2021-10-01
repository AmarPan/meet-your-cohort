const Profile = require('../models/profile')

module.exports = {
    index
}

function index(req, res) {
    res.render('profiles/index.ejs', {
            profiles: Profile.getAll()
        })
}