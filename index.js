const express = require('express');
const multer = require('multer');
const EventEmitter = require('express');

require('./config');

const Product = require('./product');

const app = express();
app.use(express.json())
const event = new EventEmitter();

event.on('fireMe', (a)=>{
    console.log(a)
})

app.get('/', (req, res)=>{
    res.send('hello there')
    var a = "forefpx fpr tje nation"
    event.emit('fireMe', a)
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

//search product
app.get('/products/search/:key', async(req, res)=>{
    console.log(req.params.key);
    let result = await Product.find({
        "$or": [
            { "title": { $regex: req.params.key} },
            { "category": { $regex: req.params.key} },
            { "memory": { $regex: req.params.key} }
        ]
    });
    res.send(result)
})

//file upload
const fileUploadUsingMulter = multer({
    storage:multer.diskStorage({
        destination: (req, file, callback)=>{
            callback(null, 'images')
        },
        filename: (req, file, callback)=>{
            callback(null, file.fieldname+'_'+Date.now()+'.jpg')
        }
    })
}).single('file');

app.post('/products/file-upload', fileUploadUsingMulter, async(req, res)=>{
    res.send('file uploaded successfully')
})


app.listen(8080)