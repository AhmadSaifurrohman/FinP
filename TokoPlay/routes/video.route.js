const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controller');

router.get('/videos', videoController.getVideoList);
router.get('/videos/:id', videoController.getVideoDetail);

module.exports = router;
