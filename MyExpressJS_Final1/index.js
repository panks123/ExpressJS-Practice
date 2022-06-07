const express= require('express')
const res = require('express/lib/response')
const path= require('path')

const app= express()

const port =80

// Making GET request at '/' endpoint : That means whenever a GET request at '/' endpoint on this server is requeste then,
// the server will respond to this request by executing the callback
app.get('/',(request,response)=>{
    response.send('Hello')
})

// If we want to send some parameters (variable) with the request and we can use that parameter with the response
app.get('/hello/:name', (req,res)=>{
    res.send("Hello "+ req.params.name + ", Welcome to this page!!!")
})

// Making GET request at '/' endpoint
app.get('/about', (req,res)=>{
    // res.send("About")

    // Or we can send static files as:
    res.sendFile(path.join(__dirname,'about.html'))
})


app.get('/getjson', (req, res)=>{
    // We can send json response as:
    res.json({ name: "Pankaj", age:23})
})

app.get('/pagenotfound', (req,res)=>{
    // We can set the status code explicitly if we need (because express automatically sets trhe status code)
    res.send("404 : Page Not Found!!!")
})

app.listen(port, () =>{
    console.log("Server is listening at port :", port)
})