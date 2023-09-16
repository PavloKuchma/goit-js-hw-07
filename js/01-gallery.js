import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");

function renderGallery(arr) {
  const renderList = arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
  listEl.insertAdjacentHTML("beforeend", renderList);
}
renderGallery(galleryItems);

listEl.addEventListener("click", onClickEnlarge);
function onClickEnlarge(evt) {
  evt.preventDefault();
  if (evt.currentTarget === evt.target) {
    return;
  }
  const currentImage = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${currentImage}">`
  );
  instance.show();
  const onEsc = (e) => {
    if (e.key === "Escape") instance.close();
    document.removeEventListener("keydown", onEsc);
  };
  document.addEventListener("keydown", onEsc);
}
