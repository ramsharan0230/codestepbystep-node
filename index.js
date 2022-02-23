const Http = require('http');
const express = require('express');
const path = require('path');
const reqFilter = require('./middleware')

const app = express()
const route = express.Router()

const pathName = path.join(__dirname, 'views')
route.use(reqFilter)
// app.use(express.static(pathName))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render(`${pathName}/index`)
})

app.get('/home', (req, res)=>{
    res.render('home')
})

route.get('/about', (req, res)=>{
    res.render(`${pathName}/about`)
})

route.get('/contact', (req, res)=>{
    res.render(`${pathName}/contact`)
})

app.use('/', route)

app.get('*', (req, res)=>{
    res.render(`${pathName}/404`)
})


app.listen(8080)