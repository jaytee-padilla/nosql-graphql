const { Schema, model } = require('mongoose');

const foodPostSchema = new Schema({
  food_name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const FoodPostModel = model('FoodPost', foodPostSchema);

module.exports = FoodPostModel;