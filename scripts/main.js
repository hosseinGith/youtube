const searchBtn = document.querySelector(".searchBtn");
const searchContainer = document.querySelector(".searchContainer");
const backBtn = document.querySelector(".backBtn");
const headerNav = document.querySelectorAll(".headerNav ul li");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

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
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let a = document.createElement("a");
  a.href = "./pages/showResult/index.html";
  localStorage.setItem("search", searchInput.value);
  a.click();
});
