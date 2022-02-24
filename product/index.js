const conn = require('../mongodb')

const products = async() =>{
    let db = await conn()
    let productCollections = await db.collection('products');
    let response = await productCollections.find().toArray();
    console.log(response)
    return response;
} 

let productDelete = async () =>{
    let db = await conn();
    let productCollections = await db.collection('products');
    let response = await productCollections.deleteOne({ model:'oppo435'})
    console.log(response);
}

module.exports = {
    products, productDelete
};
