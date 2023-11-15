import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("ul.gallery");
const markup = galleryItems
  .map(
    (galleryItems) => `<li class="gallery__item">
  <a class="gallery__link" href=${galleryItems.original}>
    <img
      class="gallery__image"
      src=${galleryItems.preview}
      data-source=${galleryItems.original}
      alt=${galleryItems.description}
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

function handleClick(event) {
  event.preventDefault();
}
