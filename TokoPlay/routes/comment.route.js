const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.get('/comments/:videoId', commentController.getCommentList);
router.post('/comments', commentController.createComment);

module.exports = router;
