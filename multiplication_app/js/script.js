
let score = 0;
let result = document.querySelector("input")
let submit = document.querySelector("button");
let show_multiplication = document.querySelector("span.mt-10");
let  show_scores = document.querySelector(".show-score");

let number_1 =0;
let number_2 =0;

submit.addEventListener("click",(e)=>{
    e.preventDefault();
   
    
   if( result.value==number_1*number_2 ) 
   score +=10  
   else score= score;

    show_scores .innerHTML = score;
    changeNumbers()
})


const changeNumbers = ()=>{
    number_1 = Math.ceil(Math.random()*10 );
      number_2 = Math.ceil(Math.random()*10) ;
      show_multiplication.innerHTML ="what is multiply " +number_1 +" by  "+ number_2 +" is :"
      result.value = ""
}
changeNumbers();

let maxMin = (max ,min)=> Math.floor(Math.random()*(max-min)) +min ;


console.log(maxMin(350,250))
console.log(maxMin(350,250))

