// First import the Express router

const router = require('express').Router()
const path=require('path')
// Add all the routes here

router.get('/',(req,res)=>{
    // Now we will use res.render() for serving the template files

    // We can send data from the server to the templates file during runtime(template engine will convert it there)
    const data={
        title: "Home",
        heading: "Home"
    }
    res.render('index', data)
})

router.get('/about', (req,res)=>{
    res.render('about', {title: "About"})
})

// downloading a file in Express
router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname) +'/../file.txt')
})

// Export the router
module.exports = router