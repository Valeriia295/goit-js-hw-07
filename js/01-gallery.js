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

const onClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const image = event.target;
  if (image.classList.contains("gallery__image")) {
    const selectedImage = event.target.attributes["data-source"].value;

    const instance = basicLightbox.create(`<img src="${selectedImage}"/>`, {
      onShow: (instance) => {
        window.addEventListener("keydown", escapeKey);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", escapeKey);
      },
    });
    instance.show();

    function escapeKey(event) {
      if (event.key === "Escape") {
        instance.close();
      }
    }
  }
};

gallery.addEventListener("click", onClick);
