const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// Get all users (for demonstration purposes)
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Other user routes for CRUD operations

module.exports = router;
