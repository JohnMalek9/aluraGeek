import { conectaAPI } from "./conectarAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

function crearCard(){
    
}


export default function construyeCard(nombre, precio, url) {
    const producto = document.createElement("li");
    productos.className = "productos__item";
    productos.innerHTML = `<iframe width="100%" height="72%" src="${url}"
        title="${nombre}" frameborder="0"
        <img src="${url}" alt="">
        <p>${precio}</p>
        </div>`

    return producto;
}


async function listaProductos() {
    
        const listaAPI = await conectarAPI.listaProductos();
        listaAPI.forEach(producto=>lista.appendChild(construyeCard(element.nombre, element.precio, element.url)));
    
}

listaProductos();