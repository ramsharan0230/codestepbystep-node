const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    memory: String,
    category: String,
    color: Array,
    model: String,
    manufacture: {
        type: Date
    },
    price: Number,
    description: String
})


module.exports = mongoose.model('product', productSchema)