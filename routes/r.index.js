const router = require('express').Router();

const passport = require('passport');

router.get('/', function (req, res) {
  res.render('v.home.ejs')
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
    successRedirect: '/', // where do you want the client to go after you login 
    failureRedirect: '/' // where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/'); // maybe u want to redirect somewhere else
});

module.exports = router;
