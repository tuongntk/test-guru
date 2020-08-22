import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  articleId: { type: String },
  content: {
    type: String,
    maxlength: [1024, 'Comment cannot be more than 1024 characters'],
    trim: true
  },
  userId: { type: String },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.models.Comments || mongoose.model('Comments', CommentSchema)