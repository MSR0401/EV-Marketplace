const express = require('express');
const router = express.Router();

// Dummy sales report endpoint
router.get('/sales', (req, res) => {
    res.status(200).json({ report: 'Sales Report Data' });
});

// Dummy inventory report endpoint
router.get('/inventory', (req, res) => {
    res.status(200).json({ report: 'Inventory Report Data' });
});

module.exports = router;
