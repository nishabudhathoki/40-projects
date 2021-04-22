// to reference to html
const hero = document.querySelector(".hero");
const modalBtn = document.querySelector(".btnmodal_btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close_btn");

// when we click the open modal button
modalBtn.addEventListener("click",function(){
 hero.style.display="none";
 modal.classList.add("open_modal");
});

//When we click the cross button
closeBtn.addEventListener("click",function(){
hero.style.display="block";
modal.classList.remove("open_modal");
});