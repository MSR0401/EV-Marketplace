const express = require('express');
const router = express.Router();

router.get('/calculate', (req, res) => {
    const { price, downPayment, interestRate, duration } = req.query;
    const principal = parseFloat(price) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const months = parseInt(duration);

    if (monthlyRate === 0) {
        const payment = principal / months;
        return res.status(200).json({ monthlyPayment: payment.toFixed(2) });
    }
    const payment = principal * monthlyRate * Math.pow(1 + monthlyRate, months) /
                    (Math.pow(1 + monthlyRate, months) - 1);
    res.status(200).json({ monthlyPayment: payment.toFixed(2) });
});

module.exports = router;
