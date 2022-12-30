var slider = document.getElementsByClassName("slider")[0];
var intervalTime = 3000;
setInterval(() => {
  if (
    document.getElementsByClassName("slider")[0].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[0].classList.remove("active");
    document.getElementsByClassName("slider")[1].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[1].classList.remove("active");
    document.getElementsByClassName("slider")[2].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[2].classList.remove("active");
    document.getElementsByClassName("slider")[3].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[3].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[3].classList.remove("active");
    document.getElementsByClassName("slider")[4].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[4].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[4].classList.remove("active");
    document.getElementsByClassName("slider")[0].classList.add("active");
  } else if (
    document.getElementsByClassName("slider")[4].classList.contains("active")
  ) {
    clearInterval(intervalTime);
  }
}, intervalTime);

// menu time taday show code
var time_show_box = document.querySelector(".time_show_box");
function fullTimeDate(local) {
  var date = new Date();
  var Hour = date.getHours();
  const minuts = date.getMinutes();
  const second = date.getSeconds();
  const dey = date.getDate();
  const Year = date.getFullYear();
  const montsName = date.toLocaleDateString(local, { month: "long" });
  const days = date.toLocaleDateString(local, { weekday: "long" });
  if (Hour > 12) {
    Hour = Hour - 12;
  }
  time_show_box.innerHTML = days + "-" + Hour +  ":" + minuts +    ":" + second +"am" + dey +  "-" + montsName +"-" + Year;
}
fullTimeDate();
setInterval(() => {
  fullTimeDate();
}, 1000);
// bubble efect start code
// var banner=document.querySelector("#banner");
// function bubble(){
//   var count=50;
//   var i=0;
//   while(i<count){
//     var bubles=document.createElement("i");
//     var x=Math.random()*window.innerWidth+'px';
//     var y=Math.random()*window.innerHeight+'px';
//     var size=Math.random()*10;
//     bubles.style.top=y;
//     bubles.style.left=x;
//     bubles.style.width=1+size+'px';
//     bubles.style.height=1+size+'px';
//     banner.appendChild(bubles)
//        i++;
//   }

// }
// bubble();

// news post decription code
var desc = document.querySelectorAll("#desc");
var like_count = document.querySelectorAll("#like_count");
var like_btn = document.querySelectorAll("#like_btn");
var count_like_i = 0;

for (var i = 0; i < desc.length; i++) {
  if (desc[i].innerHTML.length > 300) {
    var cutp = desc[i].innerHTML.slice(600).toLocaleLowerCase() + "....!";
    desc[i].innerText = cutp;
  }
}
for (var j = 0; j < like_count.length; j++) {
  if (like_count[j].innerText.length > 2) {
    var total_like = like_count[j].innerText.slice(2);
    like_count[j].textContent = total_like;
  }
}

for (var k = 0; k < like_btn.length; k++) {
  like_btn[k].addEventListener("click", function () {
    this.classList.add("active_like");
  });
  
}

// like_btn[k].onclick=function(){
//     like_count[j].textContent=count_like_i+1

// }
// dark btn code
var all_p_tage = document.querySelectorAll("p");
var all_a_tage = document.body.querySelector("a");
var body = document.querySelector("body");
var news_box = document.querySelectorAll(".news_box");
var add_box = document.querySelectorAll(".add_box");
var category_box = document.querySelector(".category_box");
var c_ulli = category_box.querySelectorAll("ul li");
var dark_site = document.getElementById("dark_btn");
dark_site.addEventListener("click", function () {
  for (var i = 0; i < all_p_tage.length; i++) {
    all_p_tage[i].classList.toggle("all_p_tage");
  }
  for (var a = 0; a < all_a_tage.length; a++) {
    all_a_tage[a].classList.toggle("all_a_tage");
  }
  body.classList.toggle("body_dark");
  for (var d = 0; d < news_box.length; d++) {
    news_box[d].classList.toggle("all_div");
  }
  for (var s = 0; s < add_box.length; s++) {
    add_box[s].classList.toggle("add_box_shadow");
  }
  category_box.classList.toggle("category_shadow");
  for (var u = 0; u < c_ulli.length; u++) {
    c_ulli[u].classList.toggle("li_shadow");
  }
});



