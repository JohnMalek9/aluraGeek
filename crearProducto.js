import { conectaAPI } from "./conectarAPI.js";

const formulario = document.querySelector("[ingreso__datos]");

async function crearProducto(evento){
    evento.preventDefault();
    const Nombre= document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const imagen=document.querySelector("[data-url]");
    await conectarAPI.enviarProducto(nombre, precio, imagen);
    window.location.href="index.html"
}

formulario,addEventListener("submit",evento=>crearProducto(evento));