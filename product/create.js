const conn = require('../mongodb')

const productCreate = async() =>{
    let db = await conn()
    let productCollections = await db.collection('products');
    let response = await productCollections.insert([
        {
            name: 'Vivo x16',
            memory: '128 GB',
            category: 'Electronics',
            color: ['silver', 'matte black', 'red'],
            model: 'viv435',
            manufacture: '2021-01-23',
            price: '350',
            description: 'This is the vivo smartphone'
        },
        {
            name: 'Vivo x15',
            memory: '256 GB',
            category: 'Electronics',
            color: ['silver', 'black', 'red'],
            model: 'viv435',
            manufacture: '2021-01-23',
            price: '350',
            description: 'This is the vivo smartphone'
        }
    ]);
    console.log(response)
    return response;
} 

module.exports = productCreate;
