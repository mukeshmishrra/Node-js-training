// Requiered Javascript Fundamentals for node js 
//1. Array
//2. if-else
//3. loop
//4. how to get data from other file to current file

// ------------------ARRAY-----------------------

let arrayObj = [10,20,30,40,50];
console.log(arrayObj);

//print array
for(let i=0; i<arrayObj.length; i++) {
    console.log("  "+arrayObj[i]);
}

let arrayObj2 = [
    {
        name: "Mukesh Mishra",
        class: "First semester"
    },
    {
        name: "Durgesh Mishra",
        class: "second semester"
    },
    {
        name: "Aman Mishra",
        class: "third semester"
    }
]

console.log(arrayObj2);

//---------------------CONDITIONS------------------------
//IF-ELSE concepts  

let a, b, c;
a = 60;
b = 300;
c = 399;
if(a>b && a>c) {
    console.log("a is greater");
}
else{
    if(b>a && b>c){
        console.log("b is greater");
    }else {
        console.log("c s greater");
    }
}

//--------------------------LOOP-----------------------------
//for loop
let marks = [80,30,20,10,22];
//print each element using for loop
for(let i=0; i<marks.length; i++) {
    console.log(marks[i]);
}


//While loop
//till specific condition looping
let i=1;
//print 10 continues number like 1-10 
while(i<=10) {
   console.log(i);
   i++;
}


//iterable
let names = ["mukesh", "durgesh", "rahul", "mohan" ];
for(let temp of names) {
    console.log(temp);
}

//suppose i want to access data from a another file (sample.js)
const gettingAnotherFileDataObj = require('./sample');
console.log("-----------------------------")
console.log(gettingAnotherFileDataObj.name);
console.log(gettingAnotherFileDataObj.class);
console.log(gettingAnotherFileDataObj.mobile);
console.log(gettingAnotherFileDataObj.z()); 