const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))  // 3rd party middleware

app.set("view engine",'ejs')

app.get('/',(req,res,next)=>{
    const a = 5
    const b = 10
    console.log(a+b)
    next()
},(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.send('This is the about page')
})

app.get('/profile',(req,res)=>{
    res.send("This is the profile page")
})

app.listen(3000)