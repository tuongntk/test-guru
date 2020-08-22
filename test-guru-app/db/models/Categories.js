import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this category.'],
    maxlength: [125, 'Name cannot be more than 125 characters'],
  },
  description: {
    type: String,
    maxlength: [512, 'Description cannot be more than 512 characters'],
    trim: true
  },
  parentId: { type: String },
  isDeleted: { type: Boolean },
  createdUserId: { type: String },
  updatedUserId: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.models.Categories || mongoose.model('Categories', CategorySchema)