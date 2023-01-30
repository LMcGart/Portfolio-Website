const param = new URLSearchParams(document.location.search);
const yellow = param.get("from_color");
const from_color = "#" + param.get("from_color");
const to_color = "#f465d5";
const navbar = document.querySelector(".navbar");
const home = document.querySelector(".home");
const gallery = document.querySelector(".gallery");
const blocks_text = document.querySelectorAll(".blocks_text");
const backpackDiv = document.getElementById("backpack");
const oceanDiv = document.getElementById("ocean");
const reachDiv = document.getElementById("reach");
const aboutDiv = document.getElementById("about");
const portfolioBlocks = [backpackDiv, oceanDiv, reachDiv, aboutDiv];

window.onload = function () {
  window.history.replaceState({}, "", "/index.html");

  setTimeout(function () {
    blocks_text.forEach((blockText) => {
      blockText.style.transition = "opacity 0.5s";
    });
  }, 250);

  if (yellow === "feff00") {
    console.log(param);
    console.log(yellow);
    navbar.style.backgroundColor = from_color;
    home.style.color = "#000000";
    gallery.style.color = "#000000";
    console.log(navbar.style.backgroundColor);
    console.log(home.style.color);

    setTimeout(function () {
      navbar.style.transition = "background-color 2s";
      navbar.style.backgroundColor = to_color;
      home.style.color = "#fff";
      home.style.transition = "color 2s";
      console.log(home.style.color);
      gallery.style.color = "#fff";
      gallery.style.transition = "color 2s";
      console.log(navbar.style.backgroundColor);
    }, 1);
  } else if (param.has("from_color")) {
    console.log(from_color);
    navbar.style.backgroundColor = from_color;
    console.log(navbar.style.backgroundColor);

    setTimeout(function () {
      navbar.style.transition = "background-color 2s";
      navbar.style.backgroundColor = to_color;
      console.log(navbar.style.backgroundColor);
    }, 1);
  } else {
    navbar.style.backgroundColor = to_color;
  }
};

function blockMouseOver(elem) {
  portfolioBlocks.forEach((block) => {
    if (block.id === elem.id) {
      return;
    }
    block.style.filter = "brightness(60%)";
    // block.style.opacity = "0.7";
    block.style.transition = "filter 1s";
  });
}

function blockMouseOut(elem) {
  portfolioBlocks.forEach((block) => {
    if (block.id === elem.id) {
      return;
    }
    block.style.filter = "brightness(100%)";
    // block.style.opacity = "1";
    block.style.transition = "filter 1s";
  });
}
