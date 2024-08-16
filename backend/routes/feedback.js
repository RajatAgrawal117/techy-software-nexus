const express = require('express');
const router = express.Router();
const { submitFeedback, getAllFeedback, getFeedbackById, deleteFeedback } = require('../controllers/Feedback');

// Submit feedback
router.post('/', submitFeedback);

// Get all feedback
router.get('/', getAllFeedback);

// Get feedback by ID
router.get('/:id', getFeedbackById);

// Delete feedback
router.delete('/:id', deleteFeedback);

module.exports = router;
