const express = require('express');
const router = express.Router();

// Simulated login endpoint
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@example.com' && password === 'password') {
         res.status(200).json({ message: 'Login successful', token: 'dummy-token' });
    } else {
         res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
