let test = document.querySelector('.test');
let wrapper = document.querySelector('.wrapper');

let menu = document.querySelector('.menu');
let news = document.querySelector('.news_wrapper');

wrapper.style.width = "25%";
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";

wrapper.style.justifyContent = "center";
wrapper.style.alignItems = "center";

menu.style.display = "none";
news.style.display = "none";

if (screen.width <= 800) {
  wrapper.style.width = "70%";
  wrapper.style.marginTop = "30%";
}

let button = document.getElementsByTagName('a');
for (var i = 0; i < button.length; i++) {
  button[i].style.display = "flex";
  button[i].style.flexDirection = "row";
  button[i].style.justifyContent = "space-around";
  button[i].style.width = "60%";
  if (i < 2) {
    button[i].style.marginBottom = "25px";
  }
}