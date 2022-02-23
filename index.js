const Http = require('http');
const express = require('express');
const path = require('path');

const app = express()

const pathName = path.join(__dirname, 'views')

// app.use(express.static(pathName))

const reqFilter = (req, res, next)=>{
    if(req.query.age==18)
        next()
    else
        res.send('You are not privilaged')
}

app.use(reqFilter)

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render(`${pathName}/index`)
})

app.get('/home', (req, res)=>{
    res.render('home')
})

app.get('/about', (req, res)=>{
    res.render(`${pathName}/about`)
})

app.get('*', (req, res)=>{
    res.render(`${pathName}/404`)
})


app.listen(8080)