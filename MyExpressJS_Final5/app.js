// In this app we'll be learning the concept of middlewares


const express = require('express')
const res = require('express/lib/response')
const path = require("path")
const app = express()
// Importing the router
const mainRouter=require('./routes/indexRoutes')
// We can add other specific router files to routes folder

const checkApiKeyMiddleware_global = require('./middlewares/apiKeyCheck.js') // This line was added to import the middle ware so that it can be used as global middleware below

const port = process.env.PORT || 3000

app.use(express.static('public')) 

// To mention Express that we'll use EJS template engine:
app.set('view engine', 'ejs') // here we have added key value pair 'view engine' : 'ejs' to the app object

// To globally apply a middleware - mean the middleware will be applied to all the routes of the application no matter in which router it is present
// Fir this we use app.use()

// e.g
// app.use(checkApiKeyMiddleware_global)

// use the router
app.use(mainRouter)   // This is also like a middleware

// We use the router to make the main server file clean when there are more numbers of routes available in big applications

app.listen(port,()=>{
    console.log(`Express app listening at port ${port}`)
})