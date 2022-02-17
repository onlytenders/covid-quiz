let lang_button = document.querySelector('#mainlang');
let other_lang_button1 = document.querySelector('#otherlang1');
let other_lang_button2 = document.querySelector('#otherlang2');

let news_button = document.querySelector("#news_button");
let news_wrapper = document.querySelector(".news_wrapper");
let news_popup = document.querySelector(".news_popup");
let black = document.querySelector(".black");

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 30;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("virus");
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()*10}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 5000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

let clicked = false;
let mobile = false;

if (screen.width <= 800) {
  mobile = true;
  other_lang_button1.style.visibility = "visible";
  other_lang_button1.style.left = 0;
  other_lang_button1.style.opacity = "100%";
  other_lang_button2.style.visibility = "visible";
  other_lang_button2.style.left = 0;
  other_lang_button2.style.opacity = "100%";
  other_lang_button1.style.display = "none";
  other_lang_button2.style.display = "none";
}
else {
  mobile = false;
  other_lang_button1.style.display = "flex";
  other_lang_button2.style.display = "flex";
  other_lang_button1.style.opacity = "0";
  other_lang_button1.style.left = "-15px";
  other_lang_button1.style.visibility = "hidden";
  other_lang_button2.style.opacity = "0";
  other_lang_button2.style.left = "-50px";
  other_lang_button2.style.visibility = "hidden";
}

lang_button.onclick = function() {
  if (!clicked) {
    if (!mobile) {
      other_lang_button1.style.visibility = "visible";
      other_lang_button1.style.left = 0;
      other_lang_button1.style.opacity = "100%";
      other_lang_button2.style.visibility = "visible";
      other_lang_button2.style.left = 0;
      other_lang_button2.style.opacity = "100%";
    }
    else {
      other_lang_button1.style.display = "flex";
      other_lang_button2.style.display = "flex";
    }
    clicked = true;
  } else {
    if (!mobile) {
      other_lang_button1.style.opacity = "0";
      other_lang_button1.style.left = "-15px";
      other_lang_button1.style.visibility = "hidden";
      other_lang_button2.style.opacity = "0";
      other_lang_button2.style.left = "-50px";
      other_lang_button2.style.visibility = "hidden";
    }
    else {
      other_lang_button1.style.display = "none";
      other_lang_button2.style.display = "none";
    }
    clicked = false;
  }
}

let newsClicked = false;

news_button.onclick = function () {
  if (newsClicked == false) {
    newsClicked = true;
    news_wrapper.style.zIndex = "10";
    news_popup.style.transform = "translateX(0)";
    black.style.visibility = "visible";
    black.style.width = "70%";
    black.style.opacity = "30%";
  }
  else {
    news_popup.style.transform = "translateX(100%)";
    black.style.width = "100%";
    black.style.opacity = "0";
    black.style.visibility = "hidden";
    setTimeout(zIndex3, 500);
    newsClicked = false;
  }
}

black.onclick = function () {
  news_popup.style.transform = "translateX(100%)";
  black.style.width = "100%";
  black.style.opacity = "0";
  black.style.visibility = "hidden";
  setTimeout(zIndex3, 500);
  newsClicked = false;
}

function zIndex3 () {
  news_wrapper.style.zIndex = "3";
}