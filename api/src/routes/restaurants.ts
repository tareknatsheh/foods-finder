import express from "express";
const router = express.Router();
import * as restaurantsController from "../controllers/restaurants";

// Get all the restaurants in the database:
router.get("/", restaurantsController.handleGetAllRestaurants);
// Add new restaurant to database:
router.post("/", restaurantsController.handleAddNewRestaurant);
// Get one restaurant by id:
router.get("/:id", restaurantsController.handleGetRestaurantById);
// Delete a restaurant from database:
router.delete("/:id", restaurantsController.handleDeleteRestaurantById);
// Edit a restaurant by ID:
router.put("/:id", restaurantsController.handleEditRestaurantById);

export default router;