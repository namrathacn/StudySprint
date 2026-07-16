const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");


// Create Goal
router.post("/", verifyToken, createGoal);


// Get Goals
router.get("/", verifyToken, getGoals);


// Update Goal
router.put("/:id", verifyToken, updateGoal);


// Delete Goal
router.delete("/:id", verifyToken, deleteGoal);


module.exports = router;