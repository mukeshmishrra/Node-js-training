// Asynchronous Basic Concepts::

/**
 * Synchronous concept: 
 *  for Example suppose 
  block1
  block2
  block3

 * execution --> block1 run hoga aur jab iska execution complete ho jayega tab block2 and then block 3 so on.....  
 * 

 * Asynchronous concept: 
 * second task doesn't wait for completion of first task.
 
 * node.js is a asynchronous programming language. 
 * javascript is a asynchronous programming language.
 * 
 */  
  
console.log("Task 1");

setTimeout(()=>{
    console.log("Task 2");    
},2000);

console.log("Task 3");

//Output 
    //Task 1
    //Task 3
    //Task 2

    //-----------------------------------------------------------
//Drowback

let a=10;
let b=0;
setTimeout(()=>{
    b=50;
},2000);

console.warn(a+b);

//output:   10    it should be 60 but I am getting 10 as a output.

//concept 2 check index1.js (How to handle aynchronous data)