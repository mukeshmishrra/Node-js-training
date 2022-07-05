// Express installation and setup
// Hello world Example using express js 

const express = require("express");
const app = express();
app.listen("5000");

app.get('',(req,res)=>{
    res.send("this is Home page");
});

app.get('/about',(req,res)=>{
    res.send("this is About page");
})

app.get('/service', (req, res)=>{
    res.send("this is Service page");
})

