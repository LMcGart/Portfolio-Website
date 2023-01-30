window.onload = function () {
  setTimeout(function () {
    document.querySelector(".navbar").style.transition = "background-color 2s";
    document.querySelector(".navbar").style.backgroundColor = "#f21111";
    document.querySelector(".side_contents p").style.transition = "color 2s";
    document.querySelector(".side_contents p").style.color = "#f21111";
    document.querySelector(".name").style.transition = "color 2s";
    document.querySelector(".name").style.color = "#f21111";
    document.querySelector(".last_name").style.transition = "color 2s";
    document.querySelector(".last_name").style.color = "#f21111";
  }, 1);
};
