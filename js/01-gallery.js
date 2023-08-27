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
  const imgToEnlarge = galleryItems.find(
    (item) => item.original === currentImage
  );
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imgToEnlarge.original}">`
  );
  instance.show();
  document.addEventListener("keydown", (e) => {
    s;
    if (e.key === "Escape") instance.close();
  });
}
