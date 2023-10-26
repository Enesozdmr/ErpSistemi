// models/ProductGroup.js
const mongoose = require('mongoose');

const productGroupSchema = new mongoose.Schema({
    name: String
});

const ProductGroup = mongoose.model('ProductGroup', productGroupSchema);

module.exports = ProductGroup;
