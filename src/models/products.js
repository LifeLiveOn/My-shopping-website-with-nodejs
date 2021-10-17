const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: { type: String, default: null, maxLength: 250 },
    description: { type: String, default: null },
    category: { type: String, default: null, maxLength: 100 },
    price: { type: Number, default: 0 },
    image: { type: String, default: null, maxLength: 300 },
});

module.exports = mongoose.model('Product', ProductSchema, 'Products');
