setClock();
setInterval(setClock, 1000);

function setClock(){
const hour = document.querySelector("[data-hour-hand]");
const minute = document.querySelector("[data-minute-hand]");
const second = document.querySelector("[data-second-hand]");

let getTime = new Date();
let getSecond = getTime.getSeconds()/60;
let getMinute = (getSecond + getTime.getMinutes())/60;
let getHour = (getMinute + getTime.getHours())/12;

myFunction(second, getSecond);
myFunction(minute, getMinute);
myFunction(hour, getHour);
}

function myFunction(element, getHand){
    element.style.setProperty("--rotation", getHand * 360 )
}
