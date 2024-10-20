const express = require('express');
const { 
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController
} = require('../controllers/products.controller');
const router = express.Router();

router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.post('/', createProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

module.exports = router;

