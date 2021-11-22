const listContainer = document.querySelector(".all-images2");
const arr = [
  "./assets/images/mobile/120.jpg",
  "./assets/images/mobile/121.jpg",
  "./assets/images/mobile/122.jpg",
  "./assets/images/mobile/123.jpg",
  "./assets/images/mobile/124.jpg",
  "./assets/images/mobile/125.jpg",
  "./assets/images/mobile/126.jpg",
  "./assets/images/mobile/127.jpg",
  "./assets/images/mobile/128.jpg",
  "./assets/images/mobile/129.jpg",
];

arr.forEach((item, index) => {
  const img = document.createElement("img");
  img.classList.add("image-result");
  img.src = arr[index];
  listContainer.append(img);
});