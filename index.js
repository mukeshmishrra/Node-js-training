// Express installation and setup
// Hello world Example using express js 

const express = require("express");
const app = express();
app.listen("5000");

app.get('',(req,res)=>{
    res.send("this is Home page");
});

app.get('/about',(req,res)=>{
    // res.send("this is About page");
    // suppose I Want to use Html here

    res.send(`
    <h1>
        Hello i am about page with html heading tag.
    </h1>
    <a href="/contact"> 
        go to contact page
    </a>

    `);


})

app.get("/contact",(req,res)=>{
    //how to get url params
    //suppose localhost:5000/contact?id=20
    console.log(req.query.id); 

    res.send(`
        <h2>
            contact us page.
            ${ req.query.id }
        </h2>
        <a href="/about">go to about us page 
        </a>
    `);
})

app.get('/service', (req, res)=>{
    //res.send("this is Service page");
    //HOW TO SEND JSON DATA 
    res.send([
        {
            name: "mukesh",
            address: "Basna",
            mobile: "123456"
        },
        {
            name: "muskan",
            address: "delhi",
            mobile: "12443"
        },
        {
            name: "munna",
            address: "nagpur",
            mobile: "123996"
        },
        {
            name: "bhola",
            address: "kirandul",
            mobile: "993456"
        }
    ]);
})

