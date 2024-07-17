console.log('saradha khapra');//normal  console
fullName="hello java"; // Storing in a variable.
console.log(fullName);//printing with the help of variable
let price = 24;   // using the let to store price, and let will be not be re-declared
console.log(price);  //printing the value

 var age=23// if we will use the var then we can re-declared the value

 console.log(age);
const a=10 ;
 age = "hello";
 console.log(age);

 // creating an object , it is a non-primitive data type.
 const student={
    fullName :"rahul kumar",
    age : 20,
    height:6,
    isPass:true
 };
 console.log(student.age);



 //string 

let c =23;
let str="Vivek raj";
console.log(str);
console.log(str.length);// printing the length of string.


//Template Literals.

let specialString = `This is a template literal ${1+2+3}`;
console.log(specialString);


//function normal
function sum (a,b){
   return a+b;
}
console.log(sum(5, 6));

// arrow function
const arrowSum = (a,b)=>{
   console.log(a+b);
}
arrowSum(5,5);

// for each loop

let arr=[1,2,3,4,5];
arr.forEach((vall)=>{//for each loop
   console.log(vall);
});
//for of loop

for(let i of arr){  
   console.log(i);
}




