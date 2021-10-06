const router = require('express').Router();
const Project = require('../models/m.project')
const projectsCtrl = require('../controllers/c.projects')

const passport = require('passport');

router.get('/', projectsCtrl.index);
router.get('/new', projectsCtrl.new);
router.get('/:id', projectsCtrl.show)
router.get('/:id/edit', projectsCtrl.edit)
router.post('/', projectsCtrl.create);
router.delete('/:id', projectsCtrl.delete)
router.put('/:id', projectsCtrl.update)


// above routes have been reformatted
// for Mongoose and MongoDB


// 
// router.get('/:id', profilesCtrl.show);

// router.delete('/:id', profilesCtrl.delete);
// router.get('/:id/edit', profilesCtrl.edit);
// router.put('/:id', profilesCtrl.update);

module.exports = router;

