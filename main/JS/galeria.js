const botones = document.querySelectorAll(".categoria");
const imagenes = {
  todos: [
    "http://herreriagys.com.uy/imgFolder/Galeria/decoraciones/decoracion3.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/escaleras/escalera1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/mobiliarios/mobiliario2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/puertasYportones/porton2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/techos/techo1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/ventanas/ventana1.webp"
  ],
  decoraciones: [
    "http://herreriagys.com.uy/imgFolder/Galeria/decoraciones/decoracion1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/decoraciones/decoracion2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/decoraciones/decoracion3.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/decoraciones/decoracion4.webp",
    "#",
    "#"
  ],
  escaleras: [
    "http://herreriagys.com.uy/imgFolder/Galeria/escaleras/escalera1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/escaleras/escalera2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/escaleras/escalera3.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/escaleras/escalera4.webp",
    "#",
    "#"
  ],
  mobiliarios: [
    "http://herreriagys.com.uy/imgFolder/Galeria/mobiliarios/mobiliario1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/mobiliarios/mobiliario2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/mobiliarios/mobiliario3.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/mobiliarios/mobiliario4.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/mobiliarios/mobiliario5.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/mobiliarios/mobiliario6.webp"
  ],
  puertasYportones: [
    "http://herreriagys.com.uy/imgFolder/Galeria/puertasYportones/porton1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/puertasYportones/porton2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/puertasYportones/porton3.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/puertasYportones/puerta1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/puertasYportones/puerta2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/puertasYportones/puerta3.webp",
  ],
  techos: [
    "http://herreriagys.com.uy/imgFolder/Galeria/techos/techo1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/techos/techo2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/techos/techo3.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/techos/techo4.webp",
    "#",
    "#"
  ],
  ventanas: [
    "http://herreriagys.com.uy/imgFolder/Galeria/ventanas/ventana1.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/ventanas/ventana2.webp",
    "http://herreriagys.com.uy/imgFolder/Galeria/ventanas/ventana3.webp",
    "#",
    "#",
    "#"
  ]
}

function cargarCategoria(nombreCategoria){
  const imgs = document.querySelectorAll(".imagen");
  imgs.forEach((img, i) => {
    img.style.backgroundImage = `url(${imagenes[nombreCategoria][i]})`;
  });
};


botones.forEach(boton => {
  boton.addEventListener("click", () => {
    botones.forEach(btn => {
        btn.classList.remove("categoria-activa");
    });
    boton.classList.add("categoria-activa")
    
    cargarCategoria(boton.dataset.categoria);
  });
})
