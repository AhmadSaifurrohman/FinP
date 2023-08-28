const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/products', productController.getProductList);
router.get('/products/:id', productController.getProductDetail);

module.exports = router;
