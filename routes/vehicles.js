const express = require('express');
const router = express.Router();

// Dummy data
let vehicles = [
    { id: 1, make: 'Tesla', model: 'Model S', year: 2020, price: 79999 },
    { id: 2, make: 'Nissan', model: 'Leaf', year: 2019, price: 29999 }
];

// GET all vehicles
router.get('/', (req, res) => {
    res.status(200).json(vehicles);
});

// GET a single vehicle by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const vehicle = vehicles.find(v => v.id === id);
    if (vehicle) {
        res.status(200).json(vehicle);
    } else {
        res.status(404).json({ message: 'Vehicle not found' });
    }
});

// POST a new vehicle (admin only)
router.post('/', (req, res) => {
    const newVehicle = req.body;
    newVehicle.id = vehicles.length + 1;
    vehicles.push(newVehicle);
    res.status(201).json(newVehicle);
});

// PUT update vehicle details (admin only)
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
        vehicles[index] = { ...vehicles[index], ...req.body };
        res.status(200).json(vehicles[index]);
    } else {
        res.status(404).json({ message: 'Vehicle not found' });
    }
});

// DELETE a vehicle (admin only)
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
        vehicles.splice(index, 1);
        res.status(200).json({ message: 'Vehicle deleted' });
    } else {
        res.status(404).json({ message: 'Vehicle not found' });
    }
});

module.exports = router;
