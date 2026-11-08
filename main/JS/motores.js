const dialogMotores = document.querySelector("#catalogo-motores");
const abrirMotores = document.querySelector("#abrir-motores");
const cerrarMotores = document.querySelector("#cerrar-motores");

abrirMotores.addEventListener("click", () => {
    dialogMotores.showModal();
});

cerrarMotores.addEventListener("click", () => {
    dialogMotores.close();
});

dialogMotores.addEventListener("click", (event) => {
    if (event.target === dialogMotores) {
        dialogMotores.close();
    }
});