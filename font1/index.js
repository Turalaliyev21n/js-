
const btn = document.getElementById("addbtn");
const icons =document.querySelectorAll('i');

btn.addEventListener("click",()=>{
    document.body.classList.toggle("btn-dark");
    for(let i =0;i<icons.length;++i){
        icons[i].classList.toggle("dark-i")
    }
})


