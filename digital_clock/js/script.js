
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");

setInterval(()=>{
updateTime();
},1000)

const updateTime= ()=>{
    instance_hour = new Date().getHours();
    instance_minute = new Date().getMinutes();
    instance_second = new Date().getSeconds();
  hour.innerHTML = instance_hour>9 ?  instance_hour : ("0"+ instance_hour);
  minute.innerHTML = instance_minute>9 ?  instance_minute : ("0"+ instance_minute);
  second.innerHTML = instance_second>9 ?  instance_second : ("0"+ instance_second);
  ampm .innerHTML = instance_hour > 11 ?"PM":"AM"
}