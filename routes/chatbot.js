const express = require('express');
const router = express.Router();

// Simple chatbot endpoint (echo response)
router.get('/response', (req, res) => {
    const query = req.query.query;
    res.status(200).json({ response: `You asked: ${query}. How can I assist further?` });
});

module.exports = router;
