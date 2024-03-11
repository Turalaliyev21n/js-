const buttons = document.querySelectorAll(".button");
const modal = document.querySelector(".modal_input");
const ext =document.querySelector(".ext");

for(let i =0;i<buttons.length;++i){
    buttons[i].addEventListener("click",()=>{
        modal.style.display ='flex'
    })
}

   
ext.addEventListener("click",()=>{
    modal.style.display = 'none'
})