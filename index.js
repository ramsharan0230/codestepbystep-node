const Http = require('http');
const express = require('express');
const path = require('path');

const app = express()

const pathName = path.join(__dirname, 'views')

// app.use(express.static(pathName))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render(`${pathName}/index`)
})

app.get('/home', (req, res)=>{
    users = [
        {
            name: 'Mamtta shah',
            email: 'shahmamtanepal@gmail.com'
        },
        {
            name: 'Ram Sharan shah',
            email: 'ramsharan0230@gmail.com'
        }
    ]
    res.render('home', {users})
})

app.get('/about', (req, res)=>{
    res.render(`${pathName}/about`)
})

app.get('*', (req, res)=>{
    res.render(`${pathName}/404`)
})


app.listen(8080)