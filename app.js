var min = 00;
var sec = 00;
var msec = 00;
var hour = 00;
var interval ; 


var minn = document.getElementById("min")
var secc = document.getElementById("sec")
var msecc = document.getElementById("milisec")
var hourr = document.getElementById("hour")





function stopwatch(){
  
 
 msecc.innerHTML = ++msec

 if (msec == 100){
    secc.innerHTML = ++sec 
    msec = 0

    if (sec == 60){
        minn.innerHTML = ++min
        sec = 0

        if(min == 60){
            hourr.innerHTML = ++hour
        }
        

    }
     

 }

return
}

function start(){
    interval = setInterval(stopwatch , 10)
}
function stopp(){
    clearInterval(interval);

}
function reset(){
    hourr.innerHTML = 00;
    minn.innerHTML = 00;
    secc.innerHTML = 00;
    msecc.innerHTML = 00;


}