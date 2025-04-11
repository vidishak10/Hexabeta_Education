import Course from "../models/Course.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/index.js";

// @desc    Get all courses
export const getCourses = async (req, res) => {
  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Sorting
  const sortBy = req.query.sortBy || '-createdAt';
  
  // Filtering
  const filter = {};
  if (req.query.category) filter.category = req.query.category;
  if (req.query.level) filter.level = req.query.level;

  const courses = await Course.find(filter)
    .sort(sortBy)
    .skip(skip)
    .limit(limit)
    .populate('instructor', 'name email');

  const total = await Course.countDocuments(filter);

  res.status(StatusCodes.OK).json({
    success: true,
    count: courses.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: courses
  });
};

// @desc    Get single course
export const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id)
    .populate('instructor', 'name email')
    .populate('modules');

  if (!course) {
    throw new NotFoundError('Course not found');
  }

  res.status(StatusCodes.OK).json({
    success: true,
    data: course
  });
};

// @desc    Create new course
export const createCourse = async (req, res) => {
  // Check if user has instructor role
  if (req.user.role !== 'instructor' && req.user.role !== 'admin') {
    throw new ForbiddenError('Not authorized to create courses');
  }

  const courseData = {
    ...req.body,
    instructor: req.user.id
  };

  const course = await Course.create(courseData);
  res.status(StatusCodes.CREATED).json({
    success: true,
    data: course
  });
};

// @desc    Update course
export const updateCourse = async (req, res) => {
  let course = await Course.findById(req.params.id);

  if (!course) {
    throw new NotFoundError('Course not found');
  }

  // Check ownership or admin role
  if (course.instructor.toString() !== req.user.id && req.user.role !== 'admin') {
    throw new ForbiddenError('Not authorized to update this course');
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(StatusCodes.OK).json({
    success: true,
    data: course
  });
};

// @desc    Delete course
export const deleteCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    throw new NotFoundError('Course not found');
  }

  // Check ownership or admin role
  if (course.instructor.toString() !== req.user.id && req.user.role !== 'admin') {
    throw new ForbiddenError('Not authorized to delete this course');
  }

  await course.remove();
  res.status(StatusCodes.OK).json({
    success: true,
    data: {}
  });
};