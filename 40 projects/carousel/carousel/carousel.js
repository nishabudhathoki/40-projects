//creating array of object of pictures
const reviews = [
    {
    id:1,
    name:"Nature1",
    img:"https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80",
    text: 
    "It is my favourite ever Nature has own beatuy ..",
    },
   {
    id :"2",
    name:"Nature2",
    img:"https://images.unsplash.com/photo-1600535396968-39e38779b346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
    text:
    "It is the most beautiful lake .The photo is taken with right landscape .",
},
{
    id:"3",
    name:"Nature3",
    img:"https://images.unsplash.com/photo-1561576722-c6bccfb931c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text:"Beautiful Landscape.Images may be subject to copyright.",
},{
    id:"4",
    name:"Nature4",
    img:"https://images.unsplash.com/photo-1414390579679-7d6cc7b20436?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80",
    text:"Most Beautiful Nature Wallpapers.It is the beautiful place to visit.",
},
];

// to access the html file
const img=document.getElementById('imgs');
const author=document.getElementById('secene');
const info=document.getElementById('info');

const prev_btn=document.querySelector(".prev_btn");
const next_btn=document.querySelector(".next_btn");
const random_btn=document.querySelector(".random_btn");


// set the data of array of object
let currentItem=0;

// load inital item
window.addEventListener("DOMContentLoaded",function (){
  showimage(currentItem);  
});

//A function to show images 
function showimage(image){
    const item= reviews[currentItem];
    img.src=item.img;
    info.textContent=item.text;
    author.textContent=item.name;
}
//When we click the next button 
next_btn.addEventListener("click",function(){
currentItem++;
if(currentItem >reviews.length-1){
    currentItem=0;
}
showimage(currentItem);
});

// When we click the previsous button
prev_btn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem= reviews.length-1;
    }  
    showimage(currentItem);
});

// when we click show button 
random_btn.addEventListener("click", function(){
    currentItem=Math.floor(Math.random() * reviews.length);
    showimage(currentItem);
});