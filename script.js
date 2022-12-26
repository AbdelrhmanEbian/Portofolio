function toscroll() {
  scrollTo(0, 0);
}
let spans;
let span=document.querySelector(".main span")
let appear = false;
let skill=document.getElementById("skills")
let arrow = document.querySelector("button.scroll");
window.onscroll = function () {
  if (
    document.documentElement.scrollTop > 200 ||
    document.body.scrollTop > 200
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};
let about = document.querySelector("#services .content");

window.onscroll = function () {
    let me=scrollY
  if (about.offsetTop - 500 >= me) {
    about.style.left = "0";
  }
};

var li = Array.from(document.querySelector(".data ul").children);
var port = document.getElementsByClassName("project-card");
li.forEach(function (ele) {
  ele.addEventListener("click", function () {
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove("active");
    }
    for (let i = 0; i < port.length; i++) {
      if (ele.innerHTML != "All") {
        port[i].style.display = "none";
        if (port[i].getAttribute("data-filter") == ele.innerHTML) {
          port[i].style.display = "block";
          ele.classList.add("active");
        }
      } else {
        port[i].style.display = "block";
      }
    }
  });
});
window.onscroll=function () {
    if (skill.offsetTop - 500 <= scrollY) {
        skills()

    }
}

function skills() {
  spans = document.querySelectorAll(".card span");
  for (let i = 0; i < spans.length; i++) {
    let value=spans[i].getAttribute("value") / 30
    spans[i].style.transitionDuration=`${value}s`
        spans[i].style.width=spans[i].innerHTML
  }
}
// window.onload=function () {
//     span.innerHTML=""
//     let word="Front end web developer"
//     word=word.split("")
//     var int=setInterval(function () {
//     for (let i = 0; i < word.length; i++) {
//             span.innerHTML+=word[i]
//         }
//         if (span.innerHTML == "Front end web developer") {
//         clearInterval(int)
//     }
// },500
// )
// }