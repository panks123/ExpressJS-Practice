const express = require('express')
const res = require('express/lib/response')
const path = require("path")
const app = express()
// Importing the router
const mainRouter=require('./routes/indexRoutes')
// We can add other specific router files to routes folder

const port = process.env.PORT || 3000

app.use(express.static('public')) 

//                                  Template Engine
// Template engine is a part of Express that enables us to use static files in our applications.
// At runtime, the template engine replaces variables in a template file with actual values and 
// changes the template to HTML files to send to the client.

// We will be using EJS template engine
// first install it using npm install ejs

// To mention Express that we'll use EJS template engine:
app.set('view engine', 'ejs') // here we have added key value pair 'view engine' : 'ejs' to the app object
// console.log("Template engine : ",app.get('view engine'))
console.log("Directory in which the template files(or views) the Express app will check while serving : ",app.get('views'))
// So we can see that the express app will by default be serving the views from D:\MyWebDev-FullStack-CWH\MyExpressJS_Final\MyExpressJS_Final4\views
// So we need to add 'views' folder in D:\MyWebDev-FullStack-CWH\MyExpressJS_Final\MyExpressJS_Final4 
// This was default viws folder but If we want that we change it some other named folder then we can do it as below:
// app.set('views', path.resolve(__dirname)+'/templates') // It will tell the Express app to search for templates inside D:\MyWebDev-FullStack-CWH\MyExpressJS_Final\MyExpressJS_Final4/templates
// console.log("Directory in which the template files(or views) the Express app will check while serving : ",app.get('views'))

// As we are using ejs template engine so our template files will have .ejs extension


// app.get('/',(req,res)=>{
//     // Now we will use res.render() for serving the template files

//     // We can send data from the server to the templates file during runtime(template engine will convert it there)
//     const data={
//         title: "Home",
//         heading: "Home"
//     }
//     res.render('index', data)
// })

// app.get('/about', (req,res)=>{
//     res.render('about', {title: "About"})
// })

// // downloading a file in Express
// app.get('/download',(req,res)=>{
//     res.download(path.join(__dirname,'file.txt'))
// })

// We are going to add all the routes( or endpoints) inside router folder indexRouter.js

// use the router
app.use(mainRouter)

// We use the router to make the main server file clean when there are more numbers of routes available in big applications

app.listen(port,()=>{
    console.log(`Express app listening at port ${port}`)
})