const Comment = require('../models/comment.model');

const getCommentList = async (req, res) => {
  const videoId = req.params.videoId;

  try {
    const comments = await Comment.find({ videoId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createComment = async (req, res) => {
  const { videoId, username, comment } = req.body;

  try {
    const newComment = await Comment.create({
      videoId,
      username,
      comment,
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getCommentList,
  createComment,
};
