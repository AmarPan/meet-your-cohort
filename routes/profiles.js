var router = require('express').Router();
const passport = require('passport');
const Profile = require('../models/profile')
const profileController = require('../controllers/profiles')

router.get('/', profileController.index);

// function(req, res){
//     res.render('profiles/index.ejs', {
//         profiles: Profile.getAll()
//     })


router.get('/new', function(req, res){
    res.render('profiles/new.ejs')
})

router.post('/', function(req, res){
    res.redirect('/profiles')
   
})


module.exports = router;

