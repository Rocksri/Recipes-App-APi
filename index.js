require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the Recipe API!',
        endpoints: {
            createRecipe: 'POST /api/recipes',
            getAllRecipes: 'GET /api/recipes',
            getSingleRecipe: 'GET /api/recipes/:id',
            updateRecipe: 'PUT /api/recipes/:id',
            deleteRecipe: 'DELETE /api/recipes/:id'
        }
    });
});

// Recipe routes
app.use('/api/recipes', recipeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message,
        error: process.env.NODE_ENV === 'production' ? {} : err.stack,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});