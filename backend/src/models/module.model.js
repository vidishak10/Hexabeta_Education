const ModuleSchema = new mongoose.Schema({
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    order: {
      type: Number,
      required: true
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });