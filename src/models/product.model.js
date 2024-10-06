const mongoose = require('mongoose');
const moment = require('moment');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    rating: { type: Number, required: true },
    createdAt: {
        type: String,
        default: moment().format('YYYY-MM-DD HH:mm:ss')
    }
});

module.exports = mongoose.model('Product', productSchema);

