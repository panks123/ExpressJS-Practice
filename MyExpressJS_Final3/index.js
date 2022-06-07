const express = require('express')
const res = require('express/lib/response')
const path = require("path")
const app = express()

const port = process.env.PORT || 3000

// To use the static middleware we use the below syntax
app.use(express.static('public'))  // inside express.static() we specify the path of the folder in which our static files are there
                                    // So that whwerever the static file is needed it will look for that file in this folder

// If we don't have mentioned the '/' endpoint explicitly then it automatically searches for index.html in the static folder 
// which we have used in static middleware if it finds that index.html in that static folder then it serves that for '/' endpoint

// We generally use the static middleware for serving static files to our web pages e.g. .css files or javascript static files

// app.get('/',(req,res)=>{
//     res.send("Hello WorlD!!!")
// })

app.get('/',(req,res)=>{
    const path_to_index= path.join(__dirname,'index.html')
    console.log(path_to_index)
    res.sendFile(path_to_index)
})

app.get('/about', (req,res)=>{
    const path_to_about=path.resolve(__dirname)+'/about.html'
    console.log(path_to_about)
    res.sendFile(path_to_about)
})

// downloading a file in Express
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'file.txt'))
})

app.listen(port,()=>{
    console.log(`Express app listening at port ${port}`)
})