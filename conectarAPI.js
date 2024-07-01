async function listaProductos(){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();

    return conexionConvertida;
}
listarProductos();

async function crearProducto(nombre,precio,imagen){
    const conexion= await fetch("http://localhost:3001/productos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        nombre:nombre,
        precio:`${descripcion}`,
        imagen:url
    })
    })
    
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}


export const conectarAPI={
    listaProductos,crearProducto 
}
