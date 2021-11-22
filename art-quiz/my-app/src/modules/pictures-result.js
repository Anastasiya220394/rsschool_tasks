const listContainer = document.querySelector(".all-images");
const arr = [
  "./assets/images/mobile/0.jpg",
  "./assets/images/mobile/1.jpg",
  "./assets/images/mobile/2.jpg",
  "./assets/images/mobile/3.jpg",
  "./assets/images/mobile/4.jpg",
  "./assets/images/mobile/5.jpg",
  "./assets/images/mobile/6.jpg",
  "./assets/images/mobile/7.jpg",
  "./assets/images/mobile/8.jpg",
  "./assets/images/mobile/9.jpg",
];

arr.forEach((item, index) => {
  const img = document.createElement("img");
  img.classList.add("image-result");
  img.src = arr[index];
  listContainer.append(img);
});
