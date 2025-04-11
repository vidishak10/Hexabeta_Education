const InstructorSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    bio: String,
    specialization: [String],
    socialLinks: {
      website: String,
      twitter: String,
      linkedin: String,
      github: String
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    coursesCreated: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    }],
    joinedDate: {
      type: Date,
      default: Date.now
    }
  });