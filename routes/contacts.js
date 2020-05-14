const express = require('express');
const router = express.Router();

// @route   GET  Endpoint api/contacts
// @desc    Get  All users contact
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
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
