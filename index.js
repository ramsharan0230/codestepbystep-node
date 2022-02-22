const Http = require('http');
const express = require('express');
const path = require('path');

const app = express()

const pathName = path.join(__dirname, 'views')

// app.use(express.static(pathName))

app.get('/', (req, res)=>{
    res.sendFile(`${pathName}/index.html`)
})

app.get('/home', (req, res)=>{
    res.sendFile(`${pathName}/home.html`)
})

app.get('/about', (req, res)=>{
    res.sendFile(`${pathName}/about.html`)
})

app.get('*', (req, res)=>{
    res.sendFile(`${pathName}/404.html`)
})


app.listen(8080)