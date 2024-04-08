const express = require("express")


let app = express()

function logger(req, res, next){
   console.log(req.method, req.url)
   next()
}

app.use(logger)

app.get("/", (req, res)=>{
    res.send("welcome")
})

app.listen(3000,()=>{
    console.log("this server is listning on port 3000")
})