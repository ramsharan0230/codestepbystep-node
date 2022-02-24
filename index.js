const mongoose = require('mongoose');

const main = async() =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/ecomm_dbase');

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
    });

    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({
        title: "Nokia 512",
        memory: "256 GB",
        category: "Mobile",
        color: ['black', 'red', 'maroon'],
        model: 'nokia512256gb',
        manufacture: new Date(),
        price: 900,
        description: "This is the Nokia best phone ever!"
    });

    let result = await data.save();
    console.log(result);
}

main();


