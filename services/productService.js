const Product = require("../models/productModel");

exports.addProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

exports.getAllProducts = async () => {
  return await Product.find().limit(10); 
};

exports.getProductById = async (id) => {
  return await Product.findById(id);
};

exports.updateProduct = async (id, updatedData) => {
  return await Product.findByIdAndUpdate(id, updatedData, { new: true });
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
