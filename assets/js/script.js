document.addEventListener("DOMContentLoaded", () => {
    const hamburguesa = document.querySelector(".hamburguesa");
    const cerrar = document.querySelector(".cerrar");
    const menuOverlay = document.querySelector(".menu-overlay");

    hamburguesa.addEventListener("click", () => {
        menuOverlay.classList.add("show");
    });

    cerrar.addEventListener("click", () => {
        menuOverlay.classList.remove("show");
    });
});
