window.onload = function () {
  setTimeout(function () {
    document.querySelector(".navbar").style.transition = "background-color 2s";
    document.querySelector(".navbar").style.backgroundColor = "#001aff";
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
