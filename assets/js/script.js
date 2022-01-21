/**
 * Generar Script
 */
let btn = document.getElementById("saludar");

const saludo = () => {
    alert("Bienvenidos al proyecto");
}

btn.onclick = () => {
    saludo();
}

