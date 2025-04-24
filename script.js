/** @format */
/** @format */
let openmodal = document.getElementById("open");
let closemodal = document.getElementById("close");
let modal = document.getElementById("user");
let submit = document.querySelector(".submit-btn");

//open
openmodal.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
// close
closemodal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
//modal
window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});

$(document).ready(function () {
  $(".open").click(function (e) {
    $(".user-idea").fadeIn(500);
    $(".modal").addClass("transform-in");
  });
});
