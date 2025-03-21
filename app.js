const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Import route modules
const authRoutes = require('./routes/auth');
const vehiclesRoutes = require('./routes/vehicles');
const ordersRoutes = require('./routes/orders');
const loansRoutes = require('./routes/loans');
const paymentsRoutes = require('./routes/payments');
const reportsRoutes = require('./routes/reports');
const chatbotRoutes = require('./routes/chatbot');

const app = express();
app.use(bodyParser.json());

// Serve static files (HTML pages) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/auth', authRoutes);
app.use('/vehicles', vehiclesRoutes);
app.use('/orders', ordersRoutes);
app.use('/loans', loansRoutes);
app.use('/payments', paymentsRoutes);
app.use('/reports', reportsRoutes);
app.use('/chatbot', chatbotRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
