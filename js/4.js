let clicks = 0;
let array1 = [
  "Consuetudo est altera natura",
  "Nota bene",
  "Nulla calamitas sola",
  "Per aspera ad astra",
];
let array2 = [
  "Привычка - вторая натура",
  "Заметьте хорошо!",
  "Беда не приходит одна",
  "Через тернии к звёздам",
];
let node1;
let node2;
let node3;
let button = document.querySelector(".create");
let quotes = document.querySelector(".quotes");
button.addEventListener("click", function () {
  if (clicks >= 4) {
    alert("Фразы закончились");
  } else {
    if (clicks % 2 == 0) {
      node1 = document.createElement("li");
      node1.classList.add("class1");
      node2 = document.createElement("ul");
      node2.classList.add("class1");
      node3 = document.createElement("li");
      node3.classList.add("class1");
      node3.appendChild(document.createTextNode(array2[clicks]));
      node2.appendChild(node3);
      node1.appendChild(document.createTextNode(array1[clicks]));
      node1.appendChild(node2);
      quotes.appendChild(node1);
      clicks += 1;
    } else {
      node1 = document.createElement("li");
      node1.classList.add("class2");
      node2 = document.createElement("ul");
      node2.classList.add("class2");
      node3 = document.createElement("li");
      node3.classList.add("class2");
      node3.appendChild(document.createTextNode(array2[clicks]));
      node2.appendChild(node3);
      node1.appendChild(document.createTextNode(array1[clicks]));
      node1.appendChild(node2);
      quotes.appendChild(node1);
      clicks += 1;
    }
  }
});

let swap = document.querySelector(".swap");
swap.addEventListener("click", function () {
  let changed = document.getElementsByClassName("class2");
  for (let i = 0; i <= changed.length; i += 1) {
    changed[i].style.fontWeight = "900";
  }
});
