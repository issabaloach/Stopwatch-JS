
var mins_html = document.getElementById("mins")
var seconds_html = document.getElementById("seconds")
var milliSeconds_html = document.getElementById("milliSec")
var start_button = document.getElementById("start-btn")

var seconds = 0;
var minutes = 0;
var milliSec = 0;



var watchInterval ;


function start() {
     watchInterval = setInterval (function(){
        milliSec++

        if(milliSec >= 99) {
            seconds++
            milliSec = 0
        }
        if(seconds >= 59) {
            minutes++
           seconds = 0
        }
            
        milliSeconds_html.innerText = milliSec < 10 ? '0'+milliSec : milliSec
        seconds_html.innerText = seconds < 10 ? '0'+seconds : seconds
        mins_html.innerText = minutes    < 10 ? '0'+minutes : minutes

        start_button.disabled = true
     } ,1 )
}


function stop () {
    clearInterval (watchInterval)
    start_button.disabled = false
}

function reset () {
    clearInterval (watchInterval)
    seconds = 0
    minutes = 0
    milliSec = 0

    mins_html.innerText = 0
    seconds_html.innerText = 0
    milliSeconds_html.innerText = 0 
    start_button.disabled = false
}