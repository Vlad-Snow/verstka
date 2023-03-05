let cat1 = document.querySelector(".cat1");
let cat2 = document.querySelector(".cat2");
let dog1 = document.querySelector(".dog1");
let dog2 = document.querySelector(".dog2");
let elem = document.querySelector(".pic");
let reset = document.querySelector(".reset");
let check = document.querySelector(".check");
let card = document.querySelector(".card");

let xAxis;
let yAxis;
let cat1click;
let cat2click;
let dog1click;
let dog2click;
let cat1rotate = 2;
let cat2rotate = 0;
let dog1rotate = 3;
let dog2rotate = 1;
let cat1width;
let cat2width;
let dog1width;
let dog2width;
let degs = [0, 90, 180, 270];

cat1.addEventListener("click", function () {
  if (cat1click == true) {
    cat1click = false;
  } else {
    cat1click = true;
    cat2click = false;
    dog1click = false;
    dog2click = false;
  }
});
cat2.addEventListener("click", function () {
  if (cat2click == true) {
    cat2click = false;
  } else {
    cat1click = false;
    cat2click = true;
    dog1click = false;
    dog2click = false;
  }
});
dog1.addEventListener("click", function () {
  if (dog1click == true) {
    dog1click = false;
  } else {
    cat1click = false;
    cat2click = false;
    dog1click = true;
    dog2click = false;
  }
});
dog2.addEventListener("click", function () {
  if (dog2click == true) {
    dog2click = false;
  } else {
    cat1click = false;
    cat2click = false;
    dog1click = false;
    dog2click = true;
  }
});

document.addEventListener("mousemove", function (event) {
  if (cat1click == true) {
    xAxis = event.pageX - 60;
    yAxis = event.pageY - 80;
    cat1.style.top = yAxis + "px";
    cat1.style.left = xAxis + "px";
    cat1width = xAxis;
  }
  if (cat2click == true) {
    xAxis = event.pageX - 70;
    yAxis = event.pageY - 90;
    cat2.style.top = yAxis + "px";
    cat2.style.left = xAxis + "px";
    cat2width = xAxis;
  }
  if (dog1click == true) {
    xAxis = event.pageX - 100;
    yAxis = event.pageY - 80;
    dog1.style.top = yAxis + "px";
    dog1.style.left = xAxis + "px";
    dog1width = xAxis;
  }
  if (dog2click == true) {
    xAxis = event.pageX - 100;
    yAxis = event.pageY - 80;
    dog2.style.top = yAxis + "px";
    dog2.style.left = xAxis + "px";
    dog2width = xAxis;
  }
});

window.onkeypress = function (event) {
  if (event.key == "Enter") {
    if (cat1click == true) {
      cat1.style.transform = "rotate(" + degs[cat1rotate] + "deg)";
      cat1rotate += 1;
      if (cat1rotate == 4) {
        cat1rotate = 0;
      }
    }
    if (cat2click == true) {
      cat2.style.transform = "rotate(" + degs[cat2rotate] + "deg)";
      cat2rotate += 1;
      if (cat2rotate == 4) {
        cat2rotate = 0;
      }
    }
    if (dog1click == true) {
      dog1.style.transform = "rotate(" + degs[dog1rotate] + "deg)";
      dog1rotate += 1;
      if (dog1rotate == 4) {
        dog1rotate = 0;
      }
    }
    if (dog2click == true) {
      dog2.style.transform = "rotate(" + degs[dog2rotate] + "deg)";
      dog2rotate += 1;
      if (dog2rotate == 4) {
        dog2rotate = 0;
      }
    }
  }
};

reset.addEventListener("click", function () {
  cat1.style.transform = "rotate(90deg)";
  cat1.style.top = 500 + "px";
  cat1.style.left = 500 + "px";
  cat2.style.transform = "rotate(270deg)";
  cat2.style.top = 200 + "px";
  cat2.style.left = 200 + "px";
  dog1.style.transform = "rotate(180deg)";
  dog1.style.top = 300 + "px";
  dog1.style.left = 800 + "px";
  dog2.style.transform = "rotate(0deg)";
  dog2.style.top = 600 + "px";
  dog2.style.left = 400 + "px";
  card.style.backgroundColor = "#ffffff";
  cat1rotate = 2;
  cat2rotate = 0;
  dog1rotate = 3;
  dog2rotate = 1;
});

let width = window.screen.width / 2;
check.addEventListener("click", function () {
  if (
    cat1rotate == 1 &&
    cat2rotate == 1 &&
    dog1rotate == 1 &&
    dog2rotate == 1 &&
    cat1width > width &&
    cat2width > width &&
    dog1width < width &&
    dog2width < width
  ) {
    card.style.backgroundColor = "#998be9";
  }
});
