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
  if (e.target === modal) {
    modal.classList.remove("show-modal");
  }
});
