const express = require('express');
const router = express.Router();
const feedbacksCtrl = require('../controllers/c.feedbacks');

router.post('/projects/:id/feedback', isLoggedIn, feedbacksCtrl.create);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;