import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this category.'],
    maxlength: [250, 'Name cannot be more than 250 characters'],
  },
  owner_name: {
    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  species: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  age: {
    type: Number,
  },
  poddy_trained: {
    type: Boolean,
  },
  diet: {
    type: Array,
  },
  image_url: {
    required: [true, 'Please provide an image url for this pet.'],
    type: String,
  },
  likes: {
    type: Array,
  },
  dislikes: {
    type: Array,
  },
})

export default mongoose.models.Comments || mongoose.model('Comments', CommentSchema)