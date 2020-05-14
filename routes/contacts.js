const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET  Endpoint api/contacts
// @desc    Get  All users contact
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({
            date: -1,
        });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   Post  Endpoint api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add Contact');
});

// @route   PUT  Endpoint api/contacts/:id
// @desc    Update Contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route   Delete  Endpoint api/contacts/:id
// @desc    Delete Contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;
