window.onload = function () {
  setTimeout(function () {
    document.querySelector(".navbar").style.transition = "background-color 2s";
    document.querySelector(".navbar").style.backgroundColor = "#feff00";
    document.querySelector(".home").style.transition = "color 2s";
    document.querySelector(".home").style.color = "#000";
    document.querySelector(".gallery").style.transition = "color 2s";
    document.querySelector(".gallery").style.color = "#000";
  }, 1);
};
