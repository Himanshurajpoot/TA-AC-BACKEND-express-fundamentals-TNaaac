let express = require("express")
let logger = require("morgan")

let app = express()

app.use(logger("dev"))

app.use("/admin",(req,res,next)=>{
    next("Unauthorized")
})

app.get("/", (req, res)=>{
    res.send("this is / ")
})

app.get("/about", (req,res)=>{
    res.send("this is /about ")
})

app.use((req, res, next)=>{
    res.send("page not found")
})

app.use((err, req, res, next)=>{
    res.send(err)
})


app.listen(4000, ()=>{
    console.log("server is listing on port 4k")
})