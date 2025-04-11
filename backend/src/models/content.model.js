const ContentSchema = new mongoose.Schema({
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    type: {
      type: String,
      required: true,
      enum: ['video', 'pdf', 'quiz', 'assignment']
    },
    // Common fields for all content types
    duration: Number, // in minutes
    order: {
      type: Number,
      required: true
    },
    isFree: {
      type: Boolean,
      default: true
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    
    // Fields specific to video content
    videoUrl: String,
    thumbnailUrl: String,
    videoDuration: Number, // in seconds
    videoProvider: {
      type: String,
      enum: ['youtube', 'vimeo', 'self-hosted', 'other']
    },
    
    // Fields specific to PDF content
    pdfUrl: String,
    pageCount: Number,
    fileSize: Number, // in KB
    
    // Metadata
    tags: [String],
    views: {
      type: Number,
      default: 0
    },
    downloads: {
      type: Number,
      default: 0
    }
  });