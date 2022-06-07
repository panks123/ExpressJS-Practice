const express= require('express')
const path = require('path')

port = process.env.PORT || 80

const app= express()

app.use(express.static(path.join(__dirname,'public'))) // Using built-in middleware in express for serving static files

app.get('/',(req,res)=>{
    res.status(200).render('index.html')
})

// Only '/' endpoint is working with the built-in middleware

// app.get('/about',(req,res)=>{
//     res.render('about.html')
// })

// app.get('/services',(req,res)=>{
//     res.render('services.html')
//     res.send('Services')
// })

// app.get('/contact',(req,res)=>{
//     res.render('contact.html')
// })

app.listen(port, ()=>{
    console.log("Listening at port ", port)
})