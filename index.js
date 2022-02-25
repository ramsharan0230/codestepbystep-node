const mongoose = require('mongoose');

//database connection
const conn = async()=>{
    return await mongoose.connect('mongodb://127.0.0.1:27017/ecomm_dbase');
}
conn()


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

// get all products
const products = async() =>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.find();
    console.log(data);
}

const createProduct = async() =>{
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

const updateProduct = async() =>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateOne({ title:'Nokia 512'}, {
        $set:{
            title: "Nokia 007",
            memory: '256 GB',
            color: ['red', 'green', 'blue', 'matte black'],
            model: 'nokia007',
            price: 1200,
        }
    })

    console.log(data);
}

const deleteProduct = async() =>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne({model: 'nokia512256gb'})

    console.log(data);
}

const findProduct = async() =>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.findOne({model: 'nokia007'})

    console.log(data);
}
// products()
// createProduct();
// updateProduct()
// findProduct()
// deleteProduct()


