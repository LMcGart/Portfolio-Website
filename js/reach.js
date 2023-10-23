window.onload = function () {
  setTimeout(function () {
    document.querySelector(".navbar").style.transition = "background-color 2s";
    document.querySelector(".navbar").style.backgroundColor = "#008000";
    document.querySelector(".home").style.transition = "color 2s";
    document.querySelector(".home").style.color = "#f0ecf0";
    document.querySelector(".gallery").style.transition = "color 2s";
    document.querySelector(".gallery").style.color = "#f0ecf0";
    document.querySelector(".side_contents p").style.transition = "color 2s";
    document.querySelector(".side_contents p").style.color = "#008000";
    document.querySelector(".name").style.transition = "color 2s";
    document.querySelector(".name").style.color = "#008000";
    document.querySelector(".last_name").style.transition = "color 2s";
    document.querySelector(".last_name").style.color = "#008000";
  }, 1);
};
