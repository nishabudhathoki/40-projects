// to take html part
const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
console.log(btns);
// to set the count
let count=0;

btns.forEach(function(btn){
    btn.addEventListener("click",function(a){
        const styles = a.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }else {
            count=0;
        }
      value.textContent=count;
    });
});
  
    