//Creating an array for color .
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

//To target or to work with html part.
const btns= document.getElementById("btn");
const colors= document.querySelector(".color");

//Using addEventlisterner to call event .
btns.addEventListener("click", function(){
   let hexColor="#";
for(let i=0; i<6; i++){
    hexColor += hex[getRandomNumber()];
}
colors.textContent=hexColor;
document.body.style.backgroundColor=hexColor;
});

 //Creating a function randomnumber
 function getRandomNumber(){
     return Math.floor(Math.random()*hex.length);
 }