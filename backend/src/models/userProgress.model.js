const UserProgressSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    contentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
      required: true
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module',
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    progressPercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    lastAccessed: {
      type: Date,
      default: Date.now
    },
    // For videos
    videoProgress: {
      currentTime: Number, // in seconds
      totalDuration: Number // in seconds
    },
    // For PDFs
    pdfProgress: {
      lastPageViewed: Number,
      totalPages: Number
    },
    completedAt: Date
  });