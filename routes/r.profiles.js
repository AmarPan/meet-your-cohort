const router = require('express').Router();
const Profile = require('../models/m.profile')
const profilesCtrl = require('../controllers/c.profiles')

const passport = require('passport');

router.get('/', profilesCtrl.index);
router.get('/new', profilesCtrl.new);
router.get('/:id', profilesCtrl.show)
router.post('/', profilesCtrl.create);


// above routes have been reformatted
// for Mongoose and MongoDB


// 
// router.get('/:id', profilesCtrl.show);

// router.delete('/:id', profilesCtrl.delete);
// router.get('/:id/edit', profilesCtrl.edit);
// router.put('/:id', profilesCtrl.update);

module.exports = router;

