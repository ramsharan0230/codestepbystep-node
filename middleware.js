module.exports= reqFilter = (req, res, next)=> {
    if(req.query.age >=18)
        next()
    else
        res.send('You are under aged')
}