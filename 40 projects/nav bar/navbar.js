//reference to toogle bar
const toogle=document.querySelector('.nav_toggle');
const links=document.querySelector('.links');

// When we click the toogle bar
toogle.addEventListener("click",function(){
//console.log(links.classList);
//console.log(links.classList.contains("links"));
if(links.classList.contains("links")){
    links.classList.remove("links");
}
    else{
    
        links.classList.add("links");
    
}

});