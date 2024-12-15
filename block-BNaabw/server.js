
// require
let express = require("express")
let logger = require("morgan")
let cookie_parser = require("cookie-parser")

// instantiate the app
let app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + "/public"))

app.use(logger("dev"))
app.use(cookie_parser())

// routes
app.get("/", (req, res )=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/projects", (req, res)=>{
    res.sendFile(__dirname + "/project.html")
})


// error handler middleware
//404 middleware 
app.use((req,res)=>{
    res.send("page not found")
})

// custom middleware
app.use((err, req, res, next)=>{
    res.send(err)
})

// listener
app.listen(4000,()=>{
    console.log("server is listening on port 4000")
})