/* Core Modules : 
   kuch feature pahle se hame mil jata har programming language me
   and this all feature is called as core modules.

   type: global and non-global

   Global:- dont need to import that call as global core modules.
        example: console.log("i am learing node js");

   Non-Global:- needs to import.
        example: fs (file system)
*/

//Global core module example: 
console.log("hey i am a global core module");
console.log(__dirname);  //will tell complete file location path 
console.log(__filename); //will tell file name only

//non global core modules
const file = require('fs');
file.writeFileSync("file1.txt","Hey Mukesh uuhh got success man!! u are doing really good work bro, keep learnig men u are going to complete nodejs within 2 days");

/*sare fs feature ko load krne ke bjaay kewal 
writeFileSync feature ko hi use krna chahte hai toh ye bhi possible hai.
*/
const fs = require('fs').writeFileSync;
fs("trial.txt", "wow u got success!! its amazing");