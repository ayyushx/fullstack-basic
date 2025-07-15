// ---------------------------
// Load Environment Variables
// ---------------------------
const dotenv = require('dotenv');
dotenv.config(); // Loads variables from .env into process.env

// -------------------
// Import Dependencies
// -------------------
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // For logging HTTP requests
const helmet = require('helmet'); // For securing HTTP headers

// ----------------
// Initialize App
// ----------------
const app = express();

// ------------------------------
// Connect to Database (Optional)
// ------------------------------
const connectDB = require('./config/db');
connectDB(); // Ensure you have a db.js in config folder

// ------------------------------
// Middleware Setup
// ------------------------------

// Enable CORS for all routes
app.use(cors());

// HTTP request logger
app.use(morgan('dev'));

// Secure HTTP headers
app.use(helmet());

// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

// ------------------------------
// Route Handlers
// ------------------------------
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the Backend API 🎉',
        status: 'OK',
    });
});

// Mount modular route files
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes')); // Example of another route group

// ------------------------------
// Error Handling Middleware
// ------------------------------

// 404 Not Found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Route not found',
    });
});

// General Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
    });
});

// ------------------------------
// Start Server
// ------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
