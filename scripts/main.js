const searchBtn = document.querySelector(".searchBtn");
const searchContainer = document.querySelector(".searchContainer");
const backBtn = document.querySelector(".backBtn");
const headerNav = document.querySelectorAll(".headerNav ul li");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.add("active");
});
backBtn.addEventListener("click", () => {
  searchContainer.classList.remove("active");
});
headerNav.forEach((item, index) => {
  item.addEventListener("click", () => {
    headerNav.forEach((item, index) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
