/*
* HOW TO CREATE SIMPLE API WITH STATIC DATA WITHOUT DATABASE CONNECTIVITY
*/

const http = require("http");
const data = require('./data');
http.createServer((req, resp) => {
    //front end se kuch data lana rhta to req use krte.
    resp.writeHead(200, { 'Content-Type': 'application\json' });

    //same file se data write krne ke liye

    // resp.write(JSON.stringify({
    //     name:"mukesh mishra", 
    //     class: "BE 8th semester",
    //     city: "Basna",
    //     mobile: "389283293"
    // }));

    //i am getting data from another file (data)
    resp.write(JSON.stringify(data));
    resp.end();

}).listen(4500);