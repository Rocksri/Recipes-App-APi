const Recipe = require('../models/Recipe');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

// @desc    Create a new recipe
// @route   POST /api/recipes
// @access  Public
const createRecipe = asyncHandler(async (req, res) => {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({ success: true, data: recipe });
});

// @desc    Get all recipes
// @route   GET /api/recipes
// @access  Public
const getAllRecipes = asyncHandler(async (req, res) => {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: recipes.length, data: recipes });
});

// @desc    Get single recipe by ID
// @route   GET /api/recipes/:id
// @access  Public
const getRecipeById = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid recipe ID'
        });
    }

    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
        return res.status(404).json({
            success: false,
            message: 'Recipe not found'
        });
    }

    res.status(200).json({ success: true, data: recipe });
});

// @desc    Update recipe by ID
// @route   PUT /api/recipes/:id
// @access  Public
const updateRecipe = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid recipe ID'
        });
    }

    const recipe = await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!recipe) {
        return res.status(404).json({
            success: false,
            message: 'Recipe not found'
        });
    }

    res.status(200).json({ success: true, data: recipe });
});

// @desc    Delete recipe by ID
// @route   DELETE /api/recipes/:id
// @access  Public
const deleteRecipe = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid recipe ID'
        });
    }

    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
        return res.status(404).json({
            success: false,
            message: 'Recipe not found'
        });
    }

    res.status(200).json({
        success: true,
        message: 'Recipe deleted successfully'
    });
});

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
};