const express = require('express');
const router = express.Router();

let paymentCounter = 0;

router.post('/', (req, res) => {
    paymentCounter++;
    // Deny every 3rd request as per the instructions
    if (paymentCounter % 3 === 0) {
        res.status(402).json({ message: 'Credit Card Authorization Failed' });
    } else {
        res.status(200).json({ message: 'Order Successfully Completed', transactionId: 'txn_' + Date.now() });
    }
});

module.exports = router;
