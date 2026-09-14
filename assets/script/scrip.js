const icon = document.getElementById("icon");
const navList = document.querySelector(".nav-list");

icon.addEventListener("click", () => {
  navList.classList.toggle("show");
});
