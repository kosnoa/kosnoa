var countDownCS135_Mid = new Date("Oct 3, 2022 19:00:00").getTime();
var countDownMath135_Mid = new Date("Oct 17, 2022 19:00:00").getTime();
var countDownMath137_Mid = new Date("Oct 24, 2022 19:00:00").getTime();
var countDownCS135_Mid2 = new Date("Nov 7, 2022 19:00:00").getTime();
var countDownMath135_Mid2 = new Date("Nov 14, 2022 19:00:00").getTime();
var countDownEndofSemester = new Date("Dec 6, 2022 23:59:59").getTime();

var cs135_mid = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownCS135_Mid - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cs_135").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(cs135_mid);
        document.getElementById("cs_135").innerHTML = "PASSED";
    }
}, 1000);

var math135_mid = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownMath135_Mid - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("math_135").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(math135_mid);
        document.getElementById("math_135").innerHTML = "PASSED";
    }
}, 1000);

var math137_mid = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownMath137_Mid - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("math_137").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(math137_mid);
        document.getElementById("math_137").innerHTML = "PASSED";
    }
}, 1000);

var cs135_mid2 = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownCS135_Mid2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cs_135_2").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(cs135_mid2);
        document.getElementById("cs_135_2").innerHTML = "PASSED";
    }
}, 1000);

var math135_mid2 = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownMath135_Mid2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("math_135_2").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(math135_mid2);
        document.getElementById("math_135_2").innerHTML = "PASSED";
    }
}, 1000);

var endofsemester = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownEndofSemester - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("end_of_semester").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(endofsemester);
        document.getElementById("end_of_semester").innerHTML = "PASSED";
    }
}, 1000);