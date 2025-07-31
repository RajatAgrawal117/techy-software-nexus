const express = require('express');
const router = express.Router();
const { submitFeedback, getAllFeedback, getFeedbackById, deleteFeedback } = require('../controllers/Feedback');

/**
 * @swagger
 * components:
 *   schemas:
 *     Feedback:
 *       type: object
 *       required:
 *         - userId
 *         - message
 *       properties:
 *         userId:
 *           type: string
 *         message:
 *           type: string
 */

/**
 * @swagger
 * /feedback:
 *   post:
 *     summary: Submit feedback
 *     tags: [Feedback]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Feedback'
 *     responses:
 *       201:
 *         description: Feedback submitted successfully
 *       400:
 *         description: Bad request
 */
router.post('/', submitFeedback);

/**
 * @swagger
 * /feedback:
 *   get:
 *     summary: Get all feedback
 *     tags: [Feedback]
 *     responses:
 *       200:
 *         description: List of feedback
 */
router.get('/', getAllFeedback);

/**
 * @swagger
 * /feedback/{id}:
 *   get:
 *     summary: Get feedback by ID
 *     tags: [Feedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Feedback details
 *       404:
 *         description: Feedback not found
 */
router.get('/:id', getFeedbackById);

/**
 * @swagger
 * /feedback/{id}:
 *   delete:
 *     summary: Delete feedback by ID
 *     tags: [Feedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Feedback deleted successfully
 *       404:
 *         description: Feedback not found
 */
router.delete('/:id', deleteFeedback);

module.exports = router;
