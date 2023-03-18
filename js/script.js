var days= document.getElementById("days")
var hour =document.getElementById("hours")
var min= document.getElementById("min")
var sec =document.getElementById("sec")
var countDate=new Date("may 7 ,2023 10:10:20").getTime()
var x=setInterval(function(){
    var now=new Date().getTime()
    var dis=countDate-now
    var daysElmnt = Math.floor(dis / (1000 * 60 * 60 * 24));
    var hoursElmnt = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesElmnt = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
    var secondsElmnt = Math.floor((dis % (1000 * 60)) / 1000);
    days.innerHTML=daysElmnt + 'D'
    hour.innerHTML=hoursElmnt + 'H'
    min.innerHTML=minutesElmnt + 'M'
    sec.innerHTML=secondsElmnt + 'S'
   
},1000)


const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })