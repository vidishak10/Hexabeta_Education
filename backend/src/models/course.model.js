const CourseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      enum: ['Science', 'Mathematics', 'History', 'Language', 'Technology', 'Arts', 'Business']
    },
    level: {
      type: String,
      required: true,
      enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    thumbnail: {
      type: String, // URL to thumbnail image
      required: true
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instructor',
      required: true
    },
    duration: {
      type: Number, // in hours
      required: true
    },
    price: {
      type: Number,
      default: 0
    },
    isFree: {
      type: Boolean,
      default: true
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    tags: [String],
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    enrollmentCount: {
      type: Number,
      default: 0
    }
  });