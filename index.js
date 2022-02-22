const Http = require('http');
const express = require('express');
const path = require('path');

const app = express()

const pathName = path.join(__dirname, 'views')

app.use(express.static(pathName))
// app.get('', (req, res)=>{
//     res.send('Hello from home url')
// })

// app.get('/about', (req, res)=>{
//     res.send('Hello from about url')
// })

app.listen(8080)