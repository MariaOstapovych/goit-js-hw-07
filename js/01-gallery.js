import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector(".gallery");

(function () {
    const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
galleryList.insertAdjacentHTML("beforeend", markup )
})();

galleryList.addEventListener("click", onGalleryListClick);

function onGalleryListClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return
    };
    console.log(event.target);

    const currentImage = event.target.closest(".gallery__image");
    const { source } = currentImage.dataset;
    const originalImage = galleryItems.find(({ original }) => original === source);

    const instance = basicLightbox.create(`
    <div>
        <img src="${originalImage.original}" alt="${originalImage.description}">
    </div>
    `);

    instance.show();
}