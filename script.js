// console.log("hello");
//  function sum(){
//     console.log(2+2);
//  }
//  sum();

//  function sum2 (number, multiplier){
//     const result= number * 10;
//     // const result2= multiplier + number;
//     // if(number % 2 === 0){
//     //     console.log("The number is even.", number);

//     // }
//     // else{
//     //     console.log("its not a even number");
//     // }
//     // console.log(result);
//     // console.log(result2);
//     return result;
//  }

//  const output = sum2(3, 10);
//  console.log(output);
//   sum();
   
//   let myName = (firstName, lastName) =>{
//     console.log(firstName + " " + lastName);
//   } 


// //   DOM Manipulation
// const hello = document.getElementsByClassName("second-heading")
// console.log(hello[0].innerText);

// const button = document.getElementById("clickRed");

// // ২. বাটনে ক্লিক করলে অ্যালার্ট দেখানোর জন্য addEventListener যুক্ত করুন
// button.addEventListener("click", function() {
//     alert("বাটনে ক্লিক করার জন্য ধন্যবাদ!"); 
// });

function colorBlue(){
    document.body.style.backgroundColor = "blue";
}
function coloryellow(){
    document.body.style.backgroundColor = "yellow";
}
function colorRed(){
    document.body.style.backgroundColor = "red";
    
}


// Evening Class 2

console.log("hello");

function sum(){
    console.log("hello");
}
sum();


function MyName(firstName, lastName){
  const ThisName = firstName ;
    return ThisName;

}
const output = MyName("John","Doe");
console.log(output);

const add = (x, y) => {
    console.log(x, y);
}
add("h","p");

function result(num1, num2){
    if(num1 % 2 == 0){
        const res= num1+num2;
        const res2= res*2;
        console.log( res2);
    }
    else{
        const res3 = num1-num2;
        console.log(res3);
    }
 
 
}
result(23, 12);
sum();


const alart = document.getElementById("alertBtn");
alart.addEventListener("click", ()=>{
    alert("This is My First Try");
});

function click2(){
    
    alert("This is second try");
}
// console.log(heading.innerText);
