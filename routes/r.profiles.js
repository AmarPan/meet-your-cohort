const router = require('express').Router();
const Profile = require('../models/m.profile')
const profileController = require('../controllers/c.profiles')

const passport = require('passport');

router.get('/', profileController.index);
router.post('/', profileController.create);
router.get('/new', profileController.new);
router.get('/:id', profileController.show);
router.delete('/:id', profileController.delete);


module.exports = router;

