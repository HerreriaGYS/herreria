const imagenesGaleria = document.querySelectorAll( ".imagen" ); 

imagenesGaleria.forEach(img => {
  img.addEventListener("click", () => {
    const url = getComputedStyle(img).backgroundImage.slice(5, -2);
    const lightboxUrl = url.replace(
      "/Galeria/",
      "/Lightbox/"
    );
    lightboxImg.src = lightboxUrl;
    lightbox.classList.add("activo");
  })
})

lightbox.addEventListener("click", () => {
  const url = "#";
  lightboxImg.src = url;
  lightbox.classList.remove("activo");
})