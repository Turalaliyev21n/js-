const addbtn = document.getElementById("plus"),
      delbtn = document.getElementById("minus"),
      counter = document.getElementById("count");

     let count = 0;
         counter.textContent = count;

         addbtn.addEventListener("click",()=>{
                count++;
                counter.textContent = count;
                if(count >= 0){
                    counter.style.color ='red'
                }
         })

         delbtn.addEventListener("click",()=>{
            count--;
            counter.textContent = count;
            if(count <= 0){
                counter.style.color ='white'
            }
         })