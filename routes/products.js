const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);

router.get('/', productController.getProducts);

router.get('/:productId', productController.getProductById);

module.exports = router;