let express = require("express");
let logger = require("morgan")
let cookie_paesel = require("cookie-parser")

let app = express()



app.use(logger("dev"))

app.use(cookie_paesel())


app.use((req,res,next)=>{
    console.log(req.cookies)
    next()
})

app.use("/about",(req,res, next)=>{
    res.cookie("username", "himanshu")
    next()
})


app.get("/about",(req,res)=>{
 res.send("welcome")
})

app.listen(3000, ()=>{
    console.log("this server is listen on port 3000")
})


// htis 