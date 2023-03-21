import { galleryItems } from "./gallery-items.js";

// Change code below this line
const imageList = document.querySelector(".gallery");
let imageHTML = "";
galleryItems.forEach((item) => {
  let image = `
  <li class="gallery__item">
<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a></li>`;
  imageHTML += image;
});
imageList.innerHTML = imageHTML;

imageList.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" >
  `);
  instance.show();
  document.addEventListener("keydown", closeOnEsc);
  function closeOnEsc(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
    document.removeEventListener("keydown", closeOnEsc);
  }
}
