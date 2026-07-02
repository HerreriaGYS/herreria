document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#icon_menu_border"); 
  if (menu) {
    for (let i = 0; i < 3; i++) {
      const div = document.createElement("div");
      div.classList.add("lines-menu");
      menu.appendChild(div);
    }
  }
});


const menu = document.querySelector("#icon_menu_border"); 
const menuOculto = document.querySelector(".menuOculto");
let activo = false; 

menu.addEventListener("click", function () {
  
  if (activo) {
    menuOculto.classList.remove("Mostrar");
    this.classList.remove("transition-close");
  } else {
    menuOculto.classList.add("Mostrar"); 
    this.classList.add("transition-close");
  }
  activo = !activo;
});
menuOculto.addEventListener("click", function () {
  
  if (activo) {
    this.classList.remove("Mostrar");
    menu.classList.remove("transition-close");
  }
  activo = !activo;
});