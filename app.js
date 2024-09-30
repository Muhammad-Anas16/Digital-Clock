// console.log(theDate)

var getHourSpn = document.getElementById("hour");
var getMinSpn = document.getElementById("min");
var getSecSpn = document.getElementById("sec");

setInterval(() => {

    var theDate = new Date();

    if (theDate.getHours < 12) {

        getHourSpn.innerText = theDate.getHours();
        getMinSpn.innerText = theDate.getMinutes();
        getSecSpn.innerText = theDate.getSeconds() + ":" + "AM";

    }
    else {
        getHourSpn.innerText = theDate.getHours() - 12;
        getMinSpn.innerText = theDate.getMinutes();
        getSecSpn.innerText = theDate.getSeconds() + ":" + "PM";

    }

}, 1000);