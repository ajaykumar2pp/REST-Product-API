const express = require('express');
const router = express.Router();


const {  addProduct, getProducts, getOneProduct, updateProuct } = require('../controllers/product.controller');

router.get('/products',  getProducts);
router.get('/product/:id', getOneProduct)
router.post('/add-product', addProduct)
router.put('/update-product/:id', updateProuct)

module.exports = router;