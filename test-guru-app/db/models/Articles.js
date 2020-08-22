import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a name for this article.'],
    maxlength: [512, 'Title cannot be more than 512 characters'],
    trim: true
  },
  description: {
    type: String,
    maxlength: [1024, 'Description cannot be more than 1024 characters'],
    trim: true
  },
  avatar: { type: String },
  avatarType: { type: String, default: 'image', enum: ['image', 'youtube'] },
  slug: { type: String, unique: true, sparse: true, trim: true },
  content: { type: String, required: [true, "Please provide the article's content"] },
  categoryId: { type: String },
  createdAuthorId: { type: String },
  updatedAuthorId: { type: String },
  commentCount: { type: Number },
  tags: [{ type: String }],
  status: {
    type: String, default: 'draft', enum: ['draft', 'published', 'deleted'],
    required: [true, "Please provide the article's status"]
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.models.Articles || mongoose.model('Articles', ArticleSchema)