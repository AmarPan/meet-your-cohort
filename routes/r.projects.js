const router = require('express').Router();
const Project = require('../models/m.project')
const projectsCtrl = require('../controllers/c.projects')

const passport = require('passport');

router.get('/all', projectsCtrl.allProjects);
router.get('/', isLoggedIn, projectsCtrl.index);
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

module.exports = router;

