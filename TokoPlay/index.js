const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

app.use(cors());
app.use(bodyParser.json());

const videoRoutes = require('./routes/video.route');
const productRoutes = require('./routes/product.route');
const commentRoutes = require('./routes/comment.route');

app.use('/api', videoRoutes);
app.use('/api', productRoutes);
app.use('/api', commentRoutes);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
