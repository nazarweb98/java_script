let button = document.querySelector("button");

button.addEventListener("mouseover",(e)=>{
    console.log(e)
    const x = e.pageX - button.offsetLeft;
    const y = e.pageY - button.offsetTop;

    button.style.setProperty("--xPos",x+"px");
    button.style.setProperty("--yPos",y+"px");
})