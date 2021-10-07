const router = require('express').Router();
const Project = require('../models/m.project')
const projectCtrl = require('../controllers/c.projects')

const passport = require('passport');


// The root route renders our only view
router.get('/', function(req, res) {
  // Where do you want to go for the root route
  // in the student demo this was res.redirect('/students'), what do you want? 
  // no /users, whatever your main resource is
  // res.redirect()
  // res.send('Test')
  res.render('v.home.ejs', {

  });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/projects', // where do you want the client to go after you login 
    failureRedirect : '/projects' // where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/projects'); // maybe u want to redirect somewhere else
});

module.exports = router;
