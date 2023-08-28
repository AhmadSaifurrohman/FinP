const Video = require('../models/video.model');

const getVideoList = async () => {
  try {
    return await Video.find();
  } catch (error) {
    throw new Error('Could not fetch video list');
  }
};

const getVideoDetail = async (videoId) => {
  try {
    return await Video.findById(videoId);
  } catch (error) {
    throw new Error('Could not fetch video detail');
  }
};

module.exports = {
  getVideoList,
  getVideoDetail,
};
