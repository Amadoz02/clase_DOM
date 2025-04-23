//variables
const formulario= document.querySelector("form");
let nombre=document.querySelector('[name="nombre"]')
let apellido=document.querySelector('[name="apellido"]')
let usuario=document.querySelector('[name="usuario"]')
let telefono=document.querySelector('[name="telefono"]')
let documento=document.querySelector('[name="documento"]')
let contrasena=document.querySelector('[name="Contrasena"]')

//validar

//funciones
const validar=(event)=>{
    if (nombre.value=="") {
        event.preventDefault();
        alert("nombre no puede estar vacio")  
    }
    if (apellido.value=="") {
        event.preventDefault();
        alert("apellido no puede estar vacio")    
    }
    if (telefono.value=="") {
        event.preventDefault();
        alert("telefono no puede estar vacio")   
    }
    if (usuario.value=="") {
        event.preventDefault();
        alert("usuario no puede estar vacio")  
    }
    if (documento.value=="") {
        event.preventDefault();
        alert("documento no puede estar vacio")    
    }
    if (contrasena.value=="") {
        event.preventDefault();
        alert("contrasena no puede estar vacio")  
    }
}
//eventos
formulario.addEventListener("submit",validar)