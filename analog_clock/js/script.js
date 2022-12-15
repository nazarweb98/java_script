
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

setInterval(()=>{
    updateTime()
},1000);
const updateTime = ()=>{
    const currentDate = new Date();

    const instance_second = currentDate.getSeconds()/60;
    const instance_min =(instance_second+ currentDate.getMinutes())/60;
    const instance_hour= (instance_min+ currentDate.getHours())/12;

   
    setRotate(second,instance_second)
    setRotate(minute,instance_min)
    setRotate(hour,instance_hour)
}
const setRotate = (elem,rotate)=>{
    elem.style.setProperty('--rotation',rotate*360)
}
setRotate()