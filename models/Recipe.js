const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    ingredients: {
        type: [String],
        required: [true, 'At least one ingredient is required'],
    },
    instructions: {
        type: String,
        required: [true, 'Instructions are required'],
    },
    cookingTime: {
        type: Number,
        required: [true, 'Cooking time is required'],
        min: [1, 'Cooking time must be at least 1 minute'],
    },
    difficulty: {
        type: String,
        required: [true, 'Difficulty level is required'],
        enum: {
            values: ['Easy', 'Medium', 'Hard'],
            message: 'Difficulty must be Easy, Medium, or Hard',
        },
    },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);