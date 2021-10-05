const express = require('express');
const router = express.Router();
const feedbacksCtrl = require('../controllers/c.feedbacks');

router.post('/projects/:id/feedback', feedbacksCtrl.create);




module.exports = router;