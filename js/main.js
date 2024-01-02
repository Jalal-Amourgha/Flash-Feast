let switcher = document.querySelectorAll(".menu-bar .row div");
let divs = document.querySelectorAll(".menu-items .menu-box");

switcher.forEach((e) => {
  e.addEventListener("click", removeActive);
  e.addEventListener("click", manageImgs);
});

function removeActive() {
  switcher.forEach((e) => {
    e.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImgs() {
  divs.forEach((div) => {
    div.classList.add("hide");
    div.classList.remove("show");
  });
  document.querySelectorAll(this.dataset.filter).forEach((el) => {
    el.classList.add("show");
  });
}

function changeLabelColor(input) {
  var selectedInput = document.querySelector(`label[for="${input}"]`);
  selectedInput.style.color = "#e3292a";
}

function resetLabelColor(input) {
  var label = document.querySelector(`label[for="${input}"]`);

  label.style.color = "#999";
}
