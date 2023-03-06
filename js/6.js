let login = document.querySelector(".login");
let user = document.querySelector(".user");
let play = document.querySelector(".play");
let caption1 = document.querySelector(".caption1");
let menu = document.querySelector(".menu");
let mode1 = document.querySelector(".mode1");
let mode2 = document.querySelector(".mode2");
let mode3 = document.querySelector(".mode3");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let back1 = document.querySelector(".back1");
let back2 = document.querySelector(".back2");
let showtime;
let timer = document.querySelector(".timer");
let bar = document.querySelector(".bar");
let game1 = document.querySelector(".game1");
let gamescreen = document.querySelector(".gamescreen");
let descr1 = document.querySelector(".descr1");
let gameover = document.querySelector(".gameover");
let result = document.querySelector(".result");
let scorebox = document.querySelector(".scorebox");
let length;
let items = document.querySelector(".items");
let raiting = document.querySelector(".raiting");
let table = document.querySelector(".table");
let showtable = document.querySelector(".showtable");

let item = [];
let numbers = [];
let clicked = [];
let correct = [];
let saferestart = true;
let safestart = true;
let place = [];
let difficulty = 0;
let username;
let time;
let countdown;
let score;
var winners;
var records;

if (localStorage.firstlaunched == undefined) {
  winners = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
  records = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  localStorage.setItem("save0", JSON.stringify(winners));
  localStorage.setItem("save1", JSON.stringify(records));
  localStorage.firstlaunched = "checked";
}

function getX(element) {
  let center =
    (element.getBoundingClientRect().left +
      element.getBoundingClientRect().right) /
    2;
  return center;
}

function getY(element) {
  let center =
    (element.getBoundingClientRect().top +
      element.getBoundingClientRect().bottom) /
    2;
  return center;
}

function setXY(element, xAxis, yAxis) {
  element.style.top = yAxis + "px";
  element.style.left = xAxis + "px";
}

function fadeElement(element) {
  setTimeout(() => {
    element.style.transition = "1s";
    element.style.opacity = "0";
  }, 1);
  setTimeout(() => {
    element.style.transition = "none";
  }, 1000);
}

function showElement(element) {
  setTimeout(() => {
    element.style.transition = "1s";
    element.style.opacity = "100%";
  }, 1);
  setTimeout(() => {
    element.style.transition = "none";
  }, 1000);
}

function setGame() {
  menu.style.display = "none";
  game1.style.display = "flex";

  if (difficulty == 1) {
    time = 30000;
    length = 6;
  }
  if (difficulty == 2) {
    time = 30000;
    length = 8;
  }
  if (difficulty == 3) {
    time = 25000;
    length = 8;
  }
}

function checkRange(j, length) {
  correct[j] = false;
  for (let i = 0; i < length; i++) {
    if (getRange(item[j], place[i]) < 50) {
      item[j].style.left = getX(place[i]) - 18 + "px";
      item[j].style.top = getY(place[i]) - 40 + "px";

      if (item[j].innerHTML == place[i].innerHTML) {
        correct[j] = true;
        let victorycheck = true;
        for (let t = 0; t < length; t++) {
          if (correct[t] == false) {
            victorycheck = false;
          }
        }
        if (victorycheck == true) {
          win();
        }
      }
    }
  }
}

function saveResult() {
  winners = JSON.parse(localStorage.getItem("save0"));
  records = JSON.parse(localStorage.getItem("save1"));
  if (records[9] < score) {
    let existuser = false;
    for (let i = 0; i < 10; i++) {
      if (username == winners[i]) {
        records[i] = score;
        existuser = true;
      }
    }
    if (existuser == false) {
      winners[9] = username;
      records[9] = score;
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (records[j] < records[j + 1]) {
          let bufferA = records[j + 1];
          records[j + 1] = records[j];
          records[j] = bufferA;
          let bufferB = winners[j + 1];
          winners[j + 1] = winners[j];
          winners[j] = bufferB;
        }
      }
    }

    localStorage.setItem("save0", JSON.stringify(winners));
    localStorage.setItem("save1", JSON.stringify(records));
  }
}

function updateRating() {
  winners = JSON.parse(localStorage.getItem("save0"));
  records = JSON.parse(localStorage.getItem("save1"));
  raiting.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    raiting.innerHTML +=
      "<div class='text'>" + winners[i] + " - " + records[i] + "</div>";
  }
}

function win() {
  score = countdown * difficulty;
  restart();
  result.style.display = "flex";
  scorebox.innerHTML = score;
  showElement(result);
  setTimeout(() => {
    fadeElement(result);
  }, 3000);
  setTimeout(() => {
    result.style.display = "none";
  }, 4000);
  saveResult();
}

function defeat() {
  restart();
  gameover.style.display = "flex";
  showElement(gameover);
  setTimeout(() => {
    fadeElement(gameover);
  }, 3000);
  setTimeout(() => {
    gameover.style.display = "none";
  }, 4000);
}

function restart() {
  for (let i = 0; i < numbers.length; i++) {
    fadeElement(item[i]);
    fadeElement(place[i]);
  }
  clearInterval(showtime);
  fadeElement(timer);
  showElement(descr1);
  setTimeout(() => {
    gamescreen.innerHTML = "";
    items.innerHTML = "";
    bar.style.width = "100%";
  }, 1000);
  correct = [];
  clicked = [];
  item = [];
  place = [];
  numbers = [];
}

function startGame1() {
  items.style.display = "flex";

  for (let i = 0; i < length; i++) {
    numbers.push(Math.round(Math.random() * 9));
    place.push();
    let node = document.createElement("div");
    node.classList.add("place");
    node.classList.add("place" + i);
    node.appendChild(document.createTextNode(numbers[i]));
    gamescreen.appendChild(node);
    place[i] = document.querySelector(".place" + i);
  }
  fadeElement(descr1);
  setTimeout(() => {
    for (let i = 0; i < length; i++) {
      showElement(place[i]);
    }
  }, 1);

  setTimeout(() => {
    for (let i = 0; i < length; i++) {
      let node = document.createElement("div");
      clicked.push(false);
      node.classList.add("item");
      node.classList.add("item" + i);
      node.appendChild(document.createTextNode(numbers[i]));
      items.appendChild(node);
      item[i] = document.querySelector(".item" + i);
      item[i].style.top =
        Math.random() *
          (window.screen.height * 0.8 - window.screen.height * 0.3) +
        window.screen.height * 0.25 +
        "px";
      item[i].style.left =
        Math.random() *
          (window.screen.width * 0.7 - window.screen.width * 0.2) +
        window.screen.width * 0.2 +
        "px";
      item[i].style.transform = "translate(0px,1500px)";

      correct[i] = false;
      item[i].addEventListener("click", function () {
        if (clicked[i] == true) {
          clicked[i] = false;
          checkRange(i, length);
        } else {
          clicked[i] = true;
        }
      });
      document.addEventListener("mousemove", function (event) {
        if (clicked[i] == true) {
          xAxis = event.pageX - 20;
          yAxis = event.pageY - 40;
          item[i].style.top = yAxis + "px";
          item[i].style.left = xAxis + "px";
        }
      });
    }

    for (let i = 0; i < length; i++) {
      place[i].style.transition = "1s";
      place[i].style.color = "var(--clr5)";
      place[i].style.opacity = "20%";
    }

    showElement(timer);
    let duration = 1;
    for (let i = 0; i < length; i++) {
      item[i].style.transition = duration + "s";
      duration -= 0.05;
      setTimeout(() => {
        item[i].style.transform = "translate(0px,0px)";
      }, 1);
      setTimeout(() => {
        item[i].style.transition = "none";
      }, 1000);
    }

    countdown = 100;
    showtime = setInterval(() => {
      bar.style.width = countdown - 4 + "%";
      countdown -= 1;
      if (countdown == 0) {
        defeat();
      }
    }, time / 100);
  }, time / 10);
}

function getRange(element1, element2) {
  let range = Math.sqrt(
    Math.pow(getX(element1) - getX(element2), 2) +
      Math.pow(getY(element1) - getY(element2), 2)
  );
  return range;
}

play.addEventListener("click", function () {
  username = user.value;
  if (username == "") {
    showElement(caption1);
  } else {
    fadeElement(caption1);
    menu.style.display = "flex";
    login.style.display = "none";
  }
});

mode1.addEventListener("click", function () {
  if (difficulty == 0) {
    difficulty = 1;
    setGame();
  }
});

mode2.addEventListener("click", function () {
  if (difficulty == 0) {
    difficulty = 2;
    setGame();
  }
});

mode3.addEventListener("click", function () {
  if (difficulty == 0) {
    difficulty = 3;
    setGame();
  }
});

back1.addEventListener("click", function () {
  fadeElement(caption1);
  menu.style.display = "none";
  login.style.display = "flex";
  user.value = "";
});

btn2.addEventListener("click", function () {
  btn2.blur();
  if (saferestart) {
    safestart = false;

    restart();
    setTimeout(() => {
      safestart = true;
    }, 3000);
  }
});

btn1.addEventListener("click", function () {
  btn2.blur();
  if (saferestart) {
    safestart = false;
    restart();
    setTimeout(() => {
      safestart = true;
    }, 2000);
    game1.style.display = "none";
    menu.style.display = "flex";
    items.style.display = "none";
    difficulty = 0;
  }
});

showtable.addEventListener("click", function () {
  table.style.display = "flex";
  login.style.display = "none";
  user.value = "";
  updateRating();
});

back2.addEventListener("click", function () {
  table.style.display = "none";
  login.style.display = "flex";
});

window.onkeypress = function (event) {
  if (
    event.key == "Enter" &&
    difficulty != 0 &&
    numbers.length == 0 &&
    safestart == true
  ) {
    saferestart = false;
    startGame1();
    setTimeout(() => {
      saferestart = true;
    }, 3000);
  }
};
