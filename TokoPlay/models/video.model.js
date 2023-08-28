const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoTitle: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  shop_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Video', videoSchema);
