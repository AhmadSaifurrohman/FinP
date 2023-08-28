const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true,
  },
  nameProduct: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  productUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
