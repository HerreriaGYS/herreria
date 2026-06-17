const imagenesGaleria = document.querySelectorAll( ".imagen" ); 

imagenesGaleria.forEach(img => {
  img.addEventListener("click", () => {
    const url = getComputedStyle(img).backgroundImage.slice(5, -2);
    lightboxImg.src = url;
    lightbox.classList.add("activo");
  })
})

lightbox.addEventListener("click", () => {
  const url = "#";
  lightboxImg.src = url;
  lightbox.classList.remove("activo");
})