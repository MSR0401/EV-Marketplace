const express = require('express');
const router = express.Router();

// Dummy data
let orders = [];
let currentOrderId = 1;

// GET all orders (admin view)
router.get('/', (req, res) => {
    res.status(200).json(orders);
});

// GET order by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const order = orders.find(o => o.id === id);
    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

// POST create a new order
router.post('/', (req, res) => {
    const newOrder = req.body;
    newOrder.id = currentOrderId++;
    newOrder.status = 'pending';
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

module.exports = router;
