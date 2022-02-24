const conn = require('../mongodb')

const update = async() =>{
    let db = await conn()
    let productCollections = await db.collection('products');
    let update = await productCollections.updateOne({ model:'viv435'}, 
        {
            $set:{
                name: 'Vivo React',
                memory: '128 GB',
                category: 'Electronics',
                color: ['silver', 'black', 'green', 'red'],
                model: 'oppo435',
                manufacture: '2021-01-23',
                price: '350',
                description: 'This is the Vivo React smartphone'
            }
        }
    )
    console.log(update)
} 

module.exports = update;
