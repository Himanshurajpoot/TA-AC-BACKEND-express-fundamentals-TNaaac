
// require
let express = require("express");



// instantiate the app
let app = express()

// middlewares
 function logger(req,res,next){
     console.log(req.method, req.url)
     next()
 }


 function json(req,res,next){
    let store = ''
    req.on('data',(chunk)=>{
        store+=chunk
    })

    req.on("end",()=>{
        req.body = JSON.parse(store)
        next()
    })
 }

 function static (req,res,next){
    let store = '';
    req.on('data',(chunks)=>{
       store += chunks;
    })

    req.on('end',()=>{
    req.body = store
    next();
    })
    
}

 app.use(logger)
 app.use(json)
 app.use(static)
// routes

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.post("/",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})


// listener
app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})