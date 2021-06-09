document.addEventListener("DOMContentLoaded", () => {
  const imagesContainerEl = document.querySelector(".slider__images-container");
  const img1EL = document.querySelector(".slider__image-container--first img");
  const img2EL = document.querySelector(".slider__image-container--second img");

  let imageContainerLeftOffset;
  let dragging = false;
  const img1ContainerEL = document.querySelector(
    ".slider__image-container--first"
  );
  const img2ContainerEL = document.querySelector(
    ".slider__image-container--second"
  );
  const handle = document.querySelector(".slider__handle");
  const divider = document.querySelector(".slider__divider");
  let imageContainerWidth;

  function getOffset(clientX) {
    const offset = clientX - imageContainerLeftOffset;

    if (offset < 0) {
      return 0;
    } else if (offset > imageContainerWidth) {
      return imageContainerWidth;
    } else {
      return offset;
    }
  }

  function move(clientX) {
    const offset = getOffset(clientX);
    let percent = (offset / imageContainerWidth) * 100;
    divider.style.left = `${percent}%`;
    img2ContainerEL.style.width = `${percent}%`;
  }

  function initEvents() {
    handle.addEventListener("mousedown", () => {
      dragging = true;
    });
    handle.addEventListener("mouseup", () => {
      dragging = false;
    });

    window.addEventListener("mousemove", (event) => {
      if (dragging) {
        move(event.clientX);
      }
    });
  }

  function adjustImagesSize() {
    imageContainerWidth = imagesContainerEl.offsetWidth;
    imageContainerLeftOffset = imagesContainerEl.offsetLeft;
    img1EL.style.width = imageContainerWidth + "px";
    img2EL.style.width = imageContainerWidth + "px";
  }

  window.addEventListener("resize", adjustImagesSize);
  adjustImagesSize();
  initEvents();
});
