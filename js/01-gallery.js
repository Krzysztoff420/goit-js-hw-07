import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const item = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", item);

var instance;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const originalImg = event.target.dataset.source;
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`<img src="${originalImg}">`);
  instance.show();
});

gallery.addEventListener("keydown", (event) => {
  if (basicLightbox.visible() && event.key === "Escape") {
    instance.close();
  }
});
