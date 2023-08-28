const Product = require('../models/product.model');

const getProductList = async () => {
  try {
    return await Product.find();
  } catch (error) {
    throw new Error('Could not fetch product list');
  }
};

const getProductDetail = async (productId) => {
  try {
    return await Product.findById(productId);
  } catch (error) {
    throw new Error('Could not fetch product detail');
  }
};

module.exports = {
  getProductList,
  getProductDetail,
};
