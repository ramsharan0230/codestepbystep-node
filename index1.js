const express = require('express')
const mongodb = require('mongodb')
const app = express()
const dbConn = require('./mongodb')

app.use(express.json())

//get all products
app.get('/', async(req, res)=>{
    let conn = await dbConn();
    let collection = await conn.collection('products');
    let data = await collection.find().toArray()

    res.send(data);
})

//post product
app.post('/', async(req, res)=>{
    let conn = await dbConn();
    let collection = await conn.collection('products');
    let result = await collection.insertOne(req.body)
    res.send(result)
})

//update product
app.put('/', async(req, res)=>{
    let conn = await dbConn();
    let collection = await conn.collection('products');
    let result = await collection.updateOne(
        { model: req.body.model },{
            $set:req.body
        }
    )
    res.send(result)
})

//delete product
app.delete('/:id', async(req, res)=>{
    let conn = await dbConn();
    let collection = await conn.collection('products');
    console.log(req.params.id)

    let result = await collection.deleteOne(
        { _id: new mongodb.ObjectId(req.params.id)}
    )
    res.send(result)
})

app.listen(8080)