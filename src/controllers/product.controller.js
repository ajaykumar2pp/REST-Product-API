const Product = require('../models/product.model')
const moment = require('moment');

// Add Product
exports.addProduct = async (req, res) => {
    try {
        const { name, price, description, category, stock, rating } = req.body;

        // check reuired fields 
        if (!name || !price || !description || !category || !stock || !rating) {
            return res.status(400).json({ message: 'Missing fileds are required.' });
        }

        const product = new Product({
            name,
            price,
            description,
            category,
            stock,
            rating,
            createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')

        });
        console.log(product)

        // Save the product to the database
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
}

// Get All Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().select("-updatedAt  -__v");

        // Check if no products are available
        if (products.length === 0) {
            return res.status(200).json({ message: 'No product available.' });
        }

        // console.log(products)
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error, please try again later' });
    }
}

// Get One Product By ID
exports.getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).select("-updatedAt -__v");

        // Check if the product is found
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Update Product by Id
exports.updateProuct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, category, stock, rating } = req.body;

        // Prepare the update object
        const updateData = {
            name,
            price,
            description,
            category,
            stock,
            rating,
        };

          // Find the product by ID and update it directly
          const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: updateData }, 
            { new: true,  select: "-updatedAt -__v" } 
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        res.json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Server error, please try again later' });
    }
}


// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the product by ID 
        const product = await Product.findByIdAndDelete(id);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        res.status(200).json({ message: 'Product deleted successfully', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};
