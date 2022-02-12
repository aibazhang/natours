const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have name'],
    unique: true,
    trim: true,
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
  },

  ratingQuantity: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },

  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },

  difficulty: {
    type: String,
    required: [true, 'A tour must have difficulty'],
  },

  price: {
    type: Number,
    require: [true, 'A tour must have a price'],
  },

  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have cover image'],
  },
  images: [String],
  createAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
