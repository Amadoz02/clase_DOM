
// import { valida } from "./modulos/modulos.js";

// //variables
// const formulario = document.querySelector("form");
// let nombre = document.querySelector('[name="nombre"]');
// let apellido = document.querySelector('[name="apellido"]');
// let usuario = document.querySelector('[name="usuario"]');
// let telefono = document.querySelector('[name="telefono"]');
// let documento = document.querySelector('[name="documento"]');
// let contrasena = document.querySelector('[name="Contrasena"]');
// let politicas = document.querySelector('[name="politicas"]');
// let boton= document.querySelector("#btn_validar");

// //validar
// console.log(nombre.nextSibling);

// //funciones
// const validar = (event) => {

//   event.preventDefault();
  
    
//     if (nombre.value == "") {
//       nombre.nextElementSibling ? nombre.nextElementSibling.remove() : "";
//       const span= document.createElement("span")
//       span.classList.add("span")
//       nombre.classList.add("campoVacio")
//       span.textContent="ingresar nombre es obligatorio";
      
//       nombre.insertAdjacentElement("afterend", span);
//     }
//     if (apellido.value == "") {
//       // event.preventDefault();
      
//       apellido.nextElementSibling ?apellido.nextElementSibling.remove() : "";
//       const span= document.createElement("span")
//       span.classList.add("span")
//       apellido.classList.add("campoVacio")
//       span.textContent="apellido no puede estar vacio";
//       apellido.insertAdjacentElement("afterend", span);
  
//     }
//     if (telefono.value == "") {
      
//       telefono.nextElementSibling ? telefono.nextElementSibling.remove() : "";
//       const span= document.createElement("span")
//       span.classList.add("span")
//       // event.preventDefault();
//       telefono.classList.add("campoVacio")
//       span.textContent="telefono no puede estar vacio";
//       telefono.insertAdjacentElement("afterend", span);
      
//     }
//     if (usuario.value == "") {
      
//       // event.preventDefault();
//       usuario.nextElementSibling ?usuario.nextElementSibling.remove() : "";
//       const span= document.createElement("span")
//       span.classList.add("span")
//       usuario.classList.add("campoVacio")
//       span.textContent="usuario no puede estar vacio";
//       usuario.insertAdjacentElement("afterend", span);
  
//     }
//     if (documento.value == "") {
      
//       documento.nextElementSibling ?documento.nextElementSibling.remove() :"" ;
      

//       const span= document.createElement("span")
//       span.classList.add("span")
//       // event.preventDefault();
//       documento.classList.add("campoVacio")
//       span.textContent="documento no puede estar vacio";
//       documento.insertAdjacentElement("afterend", span);
      
  
//     }
//     if (contrasena.value == "") {
      
//       contrasena.nextElementSibling ?contrasena.nextElementSibling.remove() : "";
//       const span= document.createElement("span")
//       span.classList.add("span")
//       // event.preventDefault();
//       contrasena.classList.add("campoVacio")
//       span.textContent="contraseña no puede estar vacio";
//       contrasena.insertAdjacentElement("afterend", span);
  
//     }
    
//   }




//   const limpiar=(event)=>{
//     if (event.target.value!=="") {
//       event.target.classList.remove("campoVacio");
//       if(event.target.nextElementSibling){
//         event.target.nextElementSibling.remove();
//       }
//     }
  
//   }

//   const acepta=(event)=>{
    
//       if (!politicas.checked) {
//           boton.setAttribute("disabled", "")
//       }else{
//         boton.removeAttribute("disabled")
//       }
    
//   }
  

//   //eventos
//   addEventListener("DOMContentLoaded", acepta)
//   formulario.addEventListener("submit", valida);
//   politicas.addEventListener("change", acepta)
//   nombre.addEventListener("blur", limpiar);
//   apellido.addEventListener("blur", limpiar);
//   telefono.addEventListener("blur", limpiar);
//   usuario.addEventListener("blur", limpiar);
//   documento.addEventListener("blur", limpiar);
//   contrasena.addEventListener("blur", limpiar);
  //Importaciones
import { validar, validarCampo, validarContrasena, validarNumeros, validarPalabras } from "./modulos/modulos.js";

// Variables
const formulario = document.querySelector("form");
let nombre = document.querySelector('[name = "nombre"]');
let apellido = document.querySelector('[name = "apellido"]');
let telefono = document.querySelector('[name = "telefono"]'); 
let ciudad = document.querySelector('[name = "ciudad"]');
let documento = document.querySelector('[name = "documento"]');
let usuario = document.querySelector('[name = "usuario"]');
let contrasena = document.querySelector('[name = "contrasena"]');
let politicas = document.querySelector('#politicas');
let genero= document.querySelector('[name = "genero"]');
let lenguajes=document.querySelector('[name = "lenguaje[]');
let boton = document.querySelector("#btn_validar");

// const datos = [nombre, apellido, telefono, documento, usuario, contrasena];

// Funciones
const habilitarBoton = () => {
  if (!politicas.checked) boton.setAttribute('disabled', '');
  else boton.removeAttribute('disabled');
}

// Eventos
addEventListener("DOMContentLoaded", habilitarBoton);

politicas.addEventListener("change", habilitarBoton);

formulario.addEventListener('submit', validar);

nombre.addEventListener('keydown', validarPalabras);
apellido.addEventListener('keydown', validarPalabras);
telefono.addEventListener('keydown', validarNumeros);
documento.addEventListener('keydown', validarNumeros);
// contrasena.addEventListener('keydown', validarContrasena)
nombre.addEventListener('blur', validarCampo);
apellido.addEventListener('blur', validarCampo);
telefono.addEventListener('blur', validarCampo);
genero.addEventListener('blur', validarCampo);
ciudad.addEventListener('blur', validarCampo);
documento.addEventListener('blur', validarCampo);
usuario.addEventListener('blur', validarCampo);
lenguajes.addEventListener('blur', validarCampo);

// contrasena.addEventListener('blur', validarCampo);