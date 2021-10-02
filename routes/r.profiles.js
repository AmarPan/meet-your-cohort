const router = require('express').Router();
const Profile = require('../models/m.profile')
const profileController = require('../controllers/c.profiles')

const passport = require('passport');

router.get('/', profileController.index);
router.get('/new', profileController.new);
router.get('/:id', profileController.show);
router.post('/', profileController.create);
router.delete('/:id', profileController.delete);
router.get('/:id/edit', profileController.edit);
router.put('/:id', profileController.update);

module.exports = router;

