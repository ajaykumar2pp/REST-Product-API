const express = require('express');
const router = express.Router();


const {  addProduct, getProducts, getOneProduct, updateProuct, deleteProduct } = require('../controllers/product.controller');

router.get('/products',  getProducts);
router.get('/product/:id', getOneProduct)
router.post('/add-product', addProduct)
router.put('/update-product/:id', updateProuct)
router.delete('/delete-product/:id', deleteProduct)

module.exports = router;