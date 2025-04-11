import express from "express";
import { 
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from "../controllers/course.controller.js";
import { authMiddleware } from "../middleware/auth.js";
import { 
  validateCreateCourse,
  validateUpdateCourse
} from "../validators/course.validator.js";

const router = express.Router();

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
router.get("/", getCourses);

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
router.get("/:id", getCourseById);

// @desc    Create new course
// @route   POST /api/courses
// @access  Private (Admin/Instructor)
router.post("/", authMiddleware, validateCreateCourse, createCourse);

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private (Admin/Instructor - Owner)
router.put("/:id", authMiddleware, validateUpdateCourse, updateCourse);

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private (Admin/Instructor - Owner)
router.delete("/:id", authMiddleware, deleteCourse);

export default router;