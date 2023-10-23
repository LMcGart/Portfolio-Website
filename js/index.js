const param = new URLSearchParams(document.location.search);
const yellow = param.get("from_color");
const from_color = "#" + param.get("from_color");
const to_color = "#f465d5";
const navbar = document.querySelector(".navbar");
const home = document.querySelector(".home");
const gallery = document.querySelector(".gallery");
const side_p = document.querySelector(".side_contents p");
const side_name = document.querySelector(".name");
const last_name = document.querySelector(".last_name");
const blocks_text = document.querySelectorAll(".blocks_text");
const backpackDiv = document.getElementById("backpack");
const oceanDiv = document.getElementById("ocean");
const reachDiv = document.getElementById("reach");
const aboutDiv = document.getElementById("about");
const portfolioBlocks = [backpackDiv, oceanDiv, reachDiv, aboutDiv];

function colorChanger() {
  window.history.replaceState({}, "", "/");

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
    side_p.style.color = "#000000";
    side_name.style.color = "#000000";
    last_name.style.color = "#000000";

    setTimeout(function () {
      navbar.style.transition = "background-color 2s";
      navbar.style.backgroundColor = to_color;
      home.style.transition = "color 2s";
      home.style.color = "#fff";
      gallery.style.transition = "color 2s";
      gallery.style.color = "#fff";
      side_p.style.transition = "color 2s";
      side_p.style.color = to_color;
      side_name.style.transition = "color 2s";
      side_name.style.color = to_color;
      last_name.style.transition = "color 2s";
      last_name.style.color = to_color;
    }, 1);
  } else if (param.has("from_color")) {
    console.log(from_color);
    navbar.style.backgroundColor = from_color;
    side_p.style.color = from_color;
    side_name.style.color = from_color;
    last_name.style.color = from_color;

    setTimeout(function () {
      navbar.style.transition = "background-color 2s";
      navbar.style.backgroundColor = to_color;
      side_p.style.transition = "color 2s";
      side_p.style.color = to_color;
      side_name.style.transition = "color 2s";
      side_name.style.color = to_color;
      last_name.style.transition = "color 2s";
      last_name.style.color = to_color;
    }, 1);
  } else {
    navbar.style.backgroundColor = to_color;
  }
}
colorChanger();

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

const body = document.querySelector("body");
const backpackText = document.getElementById("backpackTextTest");
const oceanText = document.getElementById("oceanTextTest");
const reachText = document.getElementById("reachTextTest");
const aboutText = document.getElementById("aboutTextTest");
const textBlocks = [backpackText, oceanText, reachText, aboutText];

function textBackgroundChanger() {
  let textColor = "";
  textBlocks.forEach((textBlock) => {
    textBlock.style.transition = "color 1s";
    body.style.transition = "background-color 1s";
    textBlock.addEventListener("mouseover", () => {
      let computedStyle = window.getComputedStyle(textBlock);
      textColor = computedStyle.color;
      textBlock.style.color = "#f0ecf0";
      body.style.backgroundColor = textColor;
      console.log(textColor);
    });
    textBlock.addEventListener("mouseout", () => {
      textBlock.style.color = textColor;
      body.style.backgroundColor = "#f0ecf0";
    });
  });
}

// textBackgroundChanger();

// function textMouseOver(elem) {
//   let textColor = "";
//   textBlocks.forEach((textBlock) => {
//     let computedStyle = window.getComputedStyle(elem);
//     textColor = computedStyle.color;
//     textBlock.style.color = "transparent";
//     elem.style.color = "#f0ecf0";
//     body.style.backgroundColor = textColor;
//     console.log(textColor);
//   });
// }

// function textMouseOut(elem) {
//   textBlocks.forEach((textBlock) => {
//     // elem.style.color = textColor;
//     body.style.backgroundColor = "#f0ecf0";
//   });
// }

// function textMouseOver(elem) {
//   textBlocks.forEach((textBlock) => {
//   let textColor = textBlock.style.color;
//   console.log(textColor);
//   elem.style.transition = "color 2s";
//   textBlock.style.transition = "color 2s";
//   textBlock.style.color = "transparent";
//   elem.style.color = "#000000";
//   body.style.transition = "background-color 2s";
//   body.style.backgroundColor = textColor;
//   });
// }

// function textMouseOut(elem) {
//   let textColor = elem.style.color;
//   elem.style.transition = "color 2s";
//   elem.style.color = textColor;
//   body.style.backgroundColor = "#f0ecf0";
// }
