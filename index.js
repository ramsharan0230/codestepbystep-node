const express = require('express');
require('./config');

const Product = require('./product');

const app = express();
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('hello there')
})

//get all data
app.get('/products', async(req, res)=>{
    let data = await Product.find();
    res.send(data);
})

//post product data
app.post('/products', async(req, res)=>{
    let data = new Product(req.body);
    const result = await data.save();
    res.send(result)
})

//update product data
app.put('/products/update/:_id', async(req, res)=>{
    console.log(req.params)
    let result = await Product.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
    // let data = new Product(req.body);
    // const result = await data.save();
    res.send(result)
})

//delete product
app.delete('/products/:_id', async(req, res)=>{
    let result = await Product.deleteOne(req.params);
    res.send(result)
})

app.listen(8080)