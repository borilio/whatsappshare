/*
Desc : Test para compartir texto en Whatsapp desde web con Javascript
Autor: Bori
Fecha: 16/01/2019
*/


//Función que se ejecuta al cargar la página web y cambia el href del enlace
function inicio() {
    document.querySelector("#btnW").href = "whatsapp://send?text=" + document.URL;
}

//Añadimos un listener al documento de forma que cuando termine de cargar
//la página, se inicie la función inicio()
if ("addEventListener" in document) {
    document.addEventListener("DOMContentLoaded", inicio);
}

