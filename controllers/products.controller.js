const Product = require('../models/product.model');

const getAllProductsController = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      status: 'success',
      data: products
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    })
  }
};

const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json({
      status: 'success',
      data: product
    });
  } catch (error) {
    res.status(404).json({ 
      status: 'fail',
      message: error.message 
    });
  }
};

const createProductController = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: 'success',
      message: 'Product created',
      data: {
        productId: product._id
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message 
    });
  }
};

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const updatedProduct = await Product.findById(id);

    res.status(200).json({
      status: 'success',
      message: 'Product updated',
      data: updatedProduct
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message 
    });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      status: 'success',
      message: 'Product deleted'
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message
    });
  }
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController
}