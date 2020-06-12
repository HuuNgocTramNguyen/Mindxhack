let signin = document.getElementById("fas");
signin.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../html/signin.html"
});

// let signup = document.getElementById("sign-up");
// signup.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.location.href = "../html/signin02.html"
// });

let care = document.getElementById("care");
care.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://www.theskinfood.com/goods/goodsList.do?catCd=4000000000&flag=4000000016&gubun=B"
});

let makeup = document.getElementById("makeup");
makeup.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://www.theskinfood.com/goods/goodsList.do?catCd=4000000027&flag=4000000028"
});

let eyes = document.getElementById("eyes");
eyes.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://www.theskinfood.com/goods/goodsDetail.do?goodsCd=1769-12"
});


//BUTTON : SHOP NOW
let shopnow = document.getElementById("shopnow");
shopnow.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://www.theskinfood.com/"
});


//Countdown
var target_date = new Date().getTime() + (1000 * 3600 * 48);
var days, hours, minutes, seconds;

var countdown = document.getElementById("tiles");

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown() {

    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

