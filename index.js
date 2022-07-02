/*
* How to create crud option using file system
without using database
*/
const fs = require("fs");
const path = require("path");

//this will provide us current path
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/data.txt`;

//CREATE OPERATION
fs.writeFileSync(filePath,'hey i am creating crud operation over create part');
/*result:- crud folder > data.txt create ho jayega. */

//READ OPERATION
fs.readFile(filePath,'utf8',(error, val)=>{
    console.log(val);
})
/* output : hey i am creating crud operation over create part */

//UPDATE OPERATION
fs.appendFile(filePath, ". now i am going to update new records using the appendFile function lets see this will work or not.",(err)=>{
   if(!err) console.log("data successfully updated!!");
});
/* result:  data successfully updated!! */

//RENAME EXISTING FILE NAME 
     //data.txt --> records.txt
fs.rename(filePath, `${dirPath}/records.txt`, (err)=>{
    if(!err) console.log("file name changed successfully.");
})
 /*result: file name changed successfully */  

 //DELETE OPERATION

//file name path access
const filename  = `${dirPath}/file.txt`;
fs.unlink(filename, (err)=>{
    if(!err) console.log("delete success")
}); 








