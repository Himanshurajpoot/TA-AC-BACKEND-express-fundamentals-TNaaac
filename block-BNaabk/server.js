const express = require('express');
 
let application = express()

application.get("/", (req, res)=>{
    res.send("Welcome")
})

application.listen(3000,()=>{
    console.log("this server is listening on port 3000")
})
