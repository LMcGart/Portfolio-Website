window.onload = function () {
  setTimeout(function () {
    document.querySelector(".navbar").style.transition = "background-color 2s";
    document.querySelector(".navbar").style.backgroundColor = "#001aff";
    document.querySelector(".side_contents p").style.transition = "color 2s";
    document.querySelector(".side_contents p").style.color = "#001aff";
    document.querySelector(".name").style.transition = "color 2s";
    document.querySelector(".name").style.color = "#001aff";
    document.querySelector(".last_name").style.transition = "color 2s";
    document.querySelector(".last_name").style.color = "#001aff";
  }, 1);
};

// window.onload = function () {
//   setTimeout(function () {
//     document.querySelector(".navbar").style.backgroundColor = "#001aff";
//   }, 250);
// };

// window.addEventListener("popstate", function (event) {
//   setTimeout(function () {
//     document.querySelector(".navbar").style.backgroundColor = "#f465d5";
//   }, 250);
// });

// history.pushState({}, "", "ocean.html");
