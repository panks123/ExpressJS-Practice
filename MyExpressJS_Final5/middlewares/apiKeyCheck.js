//                              MIDDLEWARE - apiCheck middleware

function checkApiKey(req,res,next){
    const valid_apis= ['1234567', '1231231','1111111', '1211211'] // Just for example, in real life API key will never be like this
    // The query string which we pass in the browser after the end point e.g /api/products?api_key=1234567 
    // String after ? is the query string
    // This query sting we can get using: req.query
    console.log(req.query)
    const incoming_api_key =  req.query.api_key
    if(incoming_api_key && valid_apis.includes(incoming_api_key))
    {
        // If the requested API key is valid then process the request - next() means next middleware will process the request now
        next() // If we don't call this , the request will hang -> So this line is must for any middleware
    }

    else{
        // If the requested API is not valid then end the request by sending the response here
        res.json({message: "Not allowed!"})
    }
    
}

// We need to export this middleware so that it can be used in the application somewhere
module.exports =  checkApiKey

// Middleware functions are functions that have access to the request object (req), the response object (res), 
// and the next middleware function in the application’s request-response cycle. The next middleware 
// function is commonly denoted by a variable named next.

// * As name suggests it comes in middle of something and that is request and response cycle
// * Middleware has access to request and response object
// * Middleware has access to next function of request-response life cycle

// Image describing the middleware: https://miro.medium.com/max/1400/1*wIkLR_9twvmG-LitHYoftw.png

// Middleware functions can perform the following tasks:

// * Execute any code.
// * Make changes to the request and the response objects.
// * End the request-response cycle.
// * Call the next middleware in the stack.

// Note: If the current middleware function does not end the request-response cycle, it must call next() 
//       to pass control to the next middleware function. Otherwise, the request will be left hanging.

// Types of express middleware
// 1. Application level middleware app.use
// 2. Router level middleware router.use
// 3. Route level (for single route)
// 4. Built-in middleware express.static,express.json,express.urlencoded
// 5. Error handling middleware app.use(err,req,res,next)
// 6. Thirdparty middleware bodyparser,cookieparser which we install through npm

// To understand more about middleware , follow : https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113 