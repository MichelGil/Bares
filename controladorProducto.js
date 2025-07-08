
let boton = document.getElementById("botonProducto");

let nombreProducto = document.getElementById("nombreProducto");
let precioProducto = document.getElementById("precioProducto");
let categoriaProducto = document.getElementById("categoriaProducto");
let cantidadProducto = document.getElementById("cantidadProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let diaMasVende = document.getElementById("diaMasVende"); 


boton.addEventListener("click", function(evento) {
    evento.preventDefault();

    let nombreIngresado = nombreProducto.value;
    let precioIngresado = precioProducto.value;
    let unidadesVendidas = descripcionProducto.value;
    let diaMasVendeIngresado = diaMasVende.value;

    
    });

   
