// First import the Express router

const router = require('express').Router()
const path=require('path')
// Import the checkApiKey middleware
const checkApiKeyMiddleware = require('../middlewares/apiKeyCheck.js')


// For the whole router level middleware we write as :
// router.use(checkApiKeyMiddleware)  // This will apply the middleware to all the routes in this router file

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

// Here we are using the 'checkApiKey' middleware for just one route(route level Middleware) - for that we pass the middleware as the second argument as below
router.get('/api/products', checkApiKeyMiddleware, (req,res)=>{
    // Here we are not using res.send, we are using res.json() because generally in /api/ we pass json data
    let data = [
        {
            id : '123',
            product : "Chrome",
            version : '1.0.1'
        },
        {
            id : '124',
            product : 'VS Code',
            version : '1.2.3'
        },
        {
            id : '124',
            product : 'Visual Studio',
            version : '1.2.1'
        },
        {
            id : '124',
            product : 'Node JS',
            version : '1.0.2'
        }
    ]
    res.json(data)
})

// we can also pass multiple middlewares in one route, for that we have to sent the array of middlewares as the second argument
// e.g router.get('/api/products', [middleware1, middleware2, middleware3] , (req,res)=>{
    
// }

// router.get('/api/products', (req,res)=>{
//     // Here we are not useng res.send, we are using res.json() because generally in /api/ we pass json data
//     let data = [
//         {
//             id : '123',
//             product : "Chrome",
//             version : '1.0.1'
//         },
//         {
//             id : '124',
//             product : 'VS Code',
//             version : '1.2.3'
//         },
//         {
//             id : '124',
//             product : 'Visual Studio',
//             version : '1.2.1'
//         },
//         {
//             id : '124',
//             product : 'Node JS',
//             version : '1.0.2'
//         }
//     ]
//     res.json(data)
// })


// Export the router
module.exports = router