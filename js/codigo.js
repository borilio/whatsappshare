/*
Desc : Test para compartir texto en Whatsapp desde web con Javascript
Autor: Bori
Fecha: 16/01/2019
*/

function inicio() {
    document.querySelector("#btnW").href = "whatsapp://send?text=" + document.URL;
}


if ("addEventListener" in document) {
    document.addEventListener("DOMContentLoaded", inicio);
}

