# Recipe API

A CRUD API for managing recipes built with Node.js, Express.js, and MongoDB.

## Features

- Create new recipes
- Get all recipes
- Get single recipe by ID
- Update existing recipes
- Delete recipes
- MongoDB integration
- Input validation
- Error handling

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install



**Postman Documentation:**

Create a Postman collection with these endpoints:

1. **Create Recipe**
   - Method: POST
   - URL: `{{base_url}}/api/recipes`
   - Body (raw JSON):
     ```json
     {
       "title": "Spaghetti Carbonara",
       "ingredients": ["spaghetti", "eggs", "pecorino cheese", "guanciale"],
       "instructions": "1. Cook pasta...",
       "cookingTime": 30,
       "difficulty": "Medium"
     }
     ```
   - Sample Response (201 Created):
     ```json
     {
       "success": true,
       "data": {
         "_id": "652a1b2c3d4e5f6a7b8c9d0",
         "title": "Spaghetti Carbonara",
         ...
       }
     }
     ```

2. **Get All Recipes**
   - Method: GET
   - URL: `{{base_url}}/api/recipes`
   - Sample Response (200 OK):
     ```json
     {
       "success": true,
       "count": 2,
       "data": [...]
     }
     ```

3. **Get Recipe by ID**
   - Method: GET
   - URL: `{{base_url}}/api/recipes/652a1b2c3d4e5f6a7b8c9d0`
   - Sample Response (200 OK):
     ```json
     {
       "success": true,
       "data": {
         "_id": "652a1b2c3d4e5f6a7b8c9d0",
         "title": "Spaghetti Carbonara",
         ...
       }
     }
     ```

4. **Update Recipe**
   - Method: PUT
   - URL: `{{base_url}}/api/recipes/652a1b2c3d4e5f6a7b8c9d0`
   - Body (raw JSON):
     ```json
     {
       "difficulty": "Hard"
     }
     ```
   - Sample Response (200 OK):
     ```json
     {
       "success": true,
       "data": {
         "_id": "652a1b2c3d4e5f6a7b8c9d0",
         "difficulty": "Hard",
         ...
       }
     }
     ```

5. **Delete Recipe**
   - Method: DELETE
   - URL: `{{base_url}}/api/recipes/652a1b2c3d4e5f6a7b8c9d0`
   - Sample Response (200 OK):
     ```json
     {
       "success": true,
       "message": "Recipe deleted successfully"
     }
     ```

This implementation provides a complete CRUD API with proper error handling, validation, 
and MongoDB integration following MVC architecture. The Postman documentation helps users test and understand the API endpoints.
