let textArea = document.querySelector("textarea");
let total = document.querySelector(".total-character");
let remain = document.querySelector(".remain-character");


textArea.addEventListener("keyup",(e)=>{

    let length = textArea.value.length;
    if(length<51){
        remain.innerHTML = 50 - length; 
        total.innerHTML =  length; 
    }else{
     textArea.value = textArea.value.substring(0,49)

    }
   
   
})
