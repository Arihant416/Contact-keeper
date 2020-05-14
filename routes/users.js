const express = require('express');
const router = express.Router();

// @route   POST  Endpoint api/users
// @desc    Register a User
// @access  Public
router.post('/', (req, res) => {
    res.send('Registers a User');
});

module.exports = router;
