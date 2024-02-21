const otherVideos = document.querySelector(".otherVideos");
const videos = document.querySelector(".videos");
const showVideo = document.querySelector(".showVideo");
let items;
let search = localStorage.getItem("search");
async function getVideos(api) {
  let data = await (await fetch(api)).json();
  return data;
}
async function clickedItem() {
  console.log(1);
  showVideo.classList.add("active");
  let data = await getVideos("../../scripts/videos.json");
  data.forEach((item, index) => {
    if (item.itemId != 1) {
      let a = `
<a href="#" class="item">
<div class="videoImg">
  <img src="${item.imgSrc}" alt="xxx" />
  <div class="videoTime">${item.videoTime}</div>
</div>
<div class="descVideo">
  <div class="chanelProf">
    <img src="${item.profImg}" alt="" />
  </div>
  <div class="videoInfo">
    <span>${item.name}</span>
    <div class="time">
      <span dir="ltr">${item.chanelName}</span>
      <span>.</span>
      <span>${item.views}</span>
      <span>.</span>
      <span>${item.timeOut}</span>
    </div>
  </div>
  <div class="otherOptionBtn">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
</a>
`;
      videos.innerHTML += a;
    }
  });
}
async function createVideoItem() {
  if (!String(search).includes("عاقبت")) return;
  let data = await getVideos("../../scripts/videos.json");
  data.forEach((item, index) => {
    let a = `
<a href="#" class="item">
<div class="videoImg">
  <img src="${item.imgSrc}" alt="xxx" />
  <div class="videoTime">${item.videoTime}</div>
</div>
<div class="descVideo">
  <div class="chanelProf">
    <img src="${item.profImg}" alt="" />
  </div>
  <div class="videoInfo">
    <span>${item.name}</span>
    <div class="time">
      <span dir="ltr">${item.chanelName}</span>
      <span>.</span>
      <span>${item.views}</span>
      <span>.</span>
      <span>${item.timeOut}</span>
    </div>
  </div>
  <div class="otherOptionBtn">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
</a>
`;
    otherVideos.innerHTML += a;
  });
  items = document.querySelectorAll(".item");
  items[0].addEventListener("click", () => {
    clickedItem();
    console.log(items);
  });
  localStorage.setItem("search", "");
}

createVideoItem();
