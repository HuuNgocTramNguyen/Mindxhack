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

let suss = document.getElementById("ok");
suss.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../html/html.html";
});