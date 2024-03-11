// const btntop =document.querySelector(".accordion_top");
    
//       addbtn =document.querySelector(".accordion_top1"),
//       delbtn =document.querySelector(".accordion_button1"),
    const container = document.querySelectorAll('.container'),
          accont =document.querySelector("accordion_button");

for(let i =0;i<container.length;++i){
     container[i].addEventListener("click",(e)=>{
        if(e.target.classList.contains('accordion_top') ){
                   e.target.classList.toggle('accordion_button');
                   
         }
     })
}



 