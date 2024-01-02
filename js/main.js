let switcher = document.querySelectorAll(".menu-bar .row div");
let divs = document.querySelectorAll(".menu-items .menu-box");

// This function for navbar background color
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Filter menu bar
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

// This function for showning the menu items that selected
function manageImgs() {
  divs.forEach((div) => {
    div.classList.add("hide");
    div.classList.remove("show");
  });
  document.querySelectorAll(this.dataset.filter).forEach((el) => {
    el.classList.add("show");
  });
}

// This function for chnage label color when input clicked
function changeLabelColor(input) {
  var selectedInput = document.querySelector(`label[for="${input}"]`);
  selectedInput.style.color = "#e3292a";
}

// This function for remove label color when input unclicked
function resetLabelColor(input) {
  var label = document.querySelector(`label[for="${input}"]`);
  label.style.color = "#999";
}
