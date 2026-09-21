console.log("hello");
 function sum(){
    console.log(2+2);
 }
 sum();

 function sum2 (number, multiplier){
    const result= number * 10;
    // const result2= multiplier + number;
    // if(number % 2 === 0){
    //     console.log("The number is even.", number);

    // }
    // else{
    //     console.log("its not a even number");
    // }
    // console.log(result);
    // console.log(result2);
    return result;
 }

 const output = sum2(3, 10);
 console.log(output);
  sum();
   
  let myName = (firstName, lastName) =>{
    console.log(firstName + " " + lastName);
  } 


//   DOM Manipulation
const hello = document.getElementsByClassName("second-heading")
console.log(hello[0].innerText);

const button = document.getElementById("clickRed");

// ২. বাটনে ক্লিক করলে অ্যালার্ট দেখানোর জন্য addEventListener যুক্ত করুন
button.addEventListener("click", function() {
    alert("বাটনে ক্লিক করার জন্য ধন্যবাদ!"); 
});

function colorBlue(){
    document.body.style.backgroundColor = "blue";
}
function colorgreen(){
    document.body.style.backgroundColor = "green";
}
function coloryellow(){
    document.body.style.backgroundColor = "yellow";
    alert("This is yellow color");
}