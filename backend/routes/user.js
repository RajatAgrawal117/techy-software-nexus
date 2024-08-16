const express = require("express")
const router = express.Router()
const { signup, login } = require("../controllers/Auth")
const { getUserProfile, updateUserProfile, deleteUserAccount } = require('../controllers/User');
const authMiddleware = require('../middleware/authMiddleware');
// user routes of login and signup


router.post("/signup", signup)
router.post("/login", login)
// Get user profile
router.get('/profile', authMiddleware, getUserProfile);

// Update user profile
router.put('/profile', authMiddleware, updateUserProfile);

// Delete user account
router.delete('/account', authMiddleware, deleteUserAccount);
module.exports = router;