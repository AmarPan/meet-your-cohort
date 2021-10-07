const router = require('express').Router();
const Project = require('../models/m.project')
const projectsCtrl = require('../controllers/c.projects')

const passport = require('passport');

router.get('/', projectsCtrl.index);
router.get('/new', isLoggedIn, projectsCtrl.new);
router.get('/:id', projectsCtrl.show)
router.get('/:id/edit', isLoggedIn, projectsCtrl.edit)

router.post('/', isLoggedIn, projectsCtrl.create);
router.delete('/:id', isLoggedIn, projectsCtrl.delete)
router.put('/:id', isLoggedIn, projectsCtrl.update)


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// above routes have been reformatted
// for Mongoose and MongoDB


// 
// router.get('/:id', profilesCtrl.show);

// router.delete('/:id', profilesCtrl.delete);
// router.get('/:id/edit', profilesCtrl.edit);
// router.put('/:id', profilesCtrl.update);

module.exports = router;

