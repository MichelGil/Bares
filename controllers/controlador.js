let boton=document.getElementById("boton")

let nombres=document.getElementById("nombres")
let salario=document.getElementById("salario")
let horas=document.getElementById("horas")
let cargo=document.getElementById("cargo")
let experiencia=document.getElementById("experiencia")

// escuchamos el evento de hacerle click al boton del formulario
boton.addEventListener("click",function(evento){

    evento.preventDefault()

    nombreIngresado=nombres.value
    salarioIngresado=nombres.value
    horasIngresadas=horas.value
    cargoIngresado=horas.value
    experienciaIngresada=experiencia.value

    let datos=JSON.stringify({
        nombresEmpleados:nombreIngresado,
        salarioEmpleado:salarioIngresado,
        horasEmpleado:horasIngresadas,
        cargoEmpleado:cargoIngresado,
        experienciaEmpleado:experienciaIngresada
    })

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
})

