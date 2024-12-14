const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))  // 3rd party middleware

app.use(express.json())       // ye body method me aaye data ko json me convert karta hai (middleware hai)
app.use(express.urlencoded({extended:true}))       //ye bhi use karna padta hai json data ko parse karna hai to
app.use(express.static("public"))     // use for css file and images and other static files

app.set("view engine",'ejs')
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.send('This is the about page')
})

app.get('/profile',(req,res)=>{
    res.send("This is the profile page")
})

app.post('/get-form-data',(req,res)=>{
    console.log(req.body)      
    res.send('data received')
})

app.listen(3000)