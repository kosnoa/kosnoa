var Countdown2022 = new Date ("Dec 31, 2022 23:59:59").getTime();

var count2022 = setInterval(function() {
    var now = new Date().getTime();

    var distance = Countdown2022 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("2022_count").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

if (distance < 0) {
    clearInterval(count2022);
    document.getElementById("2022_count").innerHTML = "PASSED";
}

}, 1000);