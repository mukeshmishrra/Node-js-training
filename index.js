/* 
HOW TO CREATE BASIC SERVER AND RUN ON BROWSER 
use:- run this program and check on the browser like localhost:given_port_number
*/

const http = require('http');

//Way-1 (Recommended way)
/*
http.createServer((request, response)=> {
    response.write("<h1>this is mukesh mishra!! and first time i am creating basic server programs.</h1>");
    response.end();

}).listen(4500);

*/

//way-2nd (by function)
// function myFunction(request, response) {
//     response.write("this is demo txt file");
//     response.end();
// }

// http.createServer(myFunction).listen(5000);


//way-3rd by arrow function
const myFunction = (request, response) => {
    response.write("<h1> wow !! congratulation brother u got success!!</h1>");
    response.end();
}
http.createServer(myFunction).listen(4500);
