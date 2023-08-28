const Comment = require('../models/comment.model');

const getCommentList = async (videoId) => {
  try {
    return await Comment.find({ videoId });
  } catch (error) {
    throw new Error('Could not fetch comment list');
  }
};

const createComment = async (videoId, username, comment) => {
  try {
    return await Comment.create({
      videoId,
      username,
      comment,
    });
  } catch (error) {
    throw new Error('Could not create comment');
  }
};

module.exports = {
  getCommentList,
  createComment,
};
