// export const valida = (e) => {
//     e.preventDefault(); // Previene el envío del formulario por defecto
//     const campos = [...e.target].filter((elemento) => {
//         return elemento.hasAttribute("required"); // Filtra los campos con el atributo "required"
//     });
//     campos.forEach(campo => {
//         console.log(campo);
//         if (campo.value == "") { // Si el campo está vacío
//             campo.classList.add("campoVacio"); // Añade la clase para estilos visuales
//             const span = document.createElement("span");
//             span.classList.add("span");
//             span.textContent = `Ingresar ${campo.getAttribute("name")} es obligatorio`;

//             // Revisa si ya existe un mensaje de error para evitar duplicados
//             if (!campo.nextElementSibling || !campo.nextElementSibling.classList.contains("span")) {
//                 campo.parentNode.insertBefore(span, campo.nextSibling); // Inserta el mensaje justo después del campo
//             }
//             console.log(`El campo ${campo.getAttribute("name")} es obligatorio`);
//         } else {
//             // Si el campo no está vacío, elimina mensajes de error previos
//             campo.classList.remove("campoVacio");
//             if (campo.nextElementSibling && campo.nextElementSibling.classList.contains("span")) {
//                 campo.nextElementSibling.remove();
//             }
//         }
//     });
// };


export const agregarspan = campo => {
    campo.classList.add("campoVacio");
    if (campo.nextElementSibling) campo.nextElementSibling.remove();
    
    let span = document.createElement("span");
    span.textContent = `El campo ${campo.getAttribute("name")} es obligatorio.`;
    span.classList.add("span");
    campo.insertAdjacentElement("afterEnd", span);

  };
  
  export const removerspan = campo => {
    campo.classList.remove("campoVacio");
    let span = campo.nextElementSibling;
    if (span && span.classList.contains("span")) {
      span.remove();
    }
  };
  
  
   export const validarCampo = (event) => {
    let campo = event.target;
    
    if (campo.type === "radio") {
        const radios = document.getElementsByName(campo.name=="genero");
        const isChecked = Array.from(radios).some(radio => radio.checked);
        const container = document.querySelector('div input[name="genero"]'); // Obtiene el contenedor
        
        if (!isChecked) {
            radios.forEach(radio => radio.classList.add("campoVacio"));
            mostrarMensajeError(container, `Debe seleccionar una opción en ${campo.getAttribute("name")}.`);
        } else {
            radios.forEach(radio => radio.classList.remove("campoVacio"));
            removerspan(container);
        }
    } else if (campo.type === "checkbox") {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][name="lenguaje[]"]');
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        
        
        if (checkedCount < 3) {
            checkboxes.forEach(checkbox => agregarspan(checkbox));

           
        } else {
            checkboxes.forEach(checkbox => removerspan(checkbox));
             
            
        }
    } else {
            // Validación para otros tipos de campos
            if (campo.value.trim() !== "" && campo.classList.contains("campoVacio")) {
                    removerspan(campo);
                }
                if (campo.tagName === "SELECT" && campo.selectedIndex !== 0 && campo.classList.contains("campoVacio")) {
                        removerspan(campo);
                    }
                }
}

// Función para mostrar el mensaje de error
const mostrarMensajeError = (container, mensaje) => {
    if (!(container.querySelector(".span"))) {
        let span = document.createElement("span");
        span.textContent = mensaje;
        span.classList.add("span");
        container.appendChild(span);
    }
};

// Función para remover el mensaje de error
const removerMensajeError = (container) => {
    const mensajeError = container.querySelector(".span");
    if (mensajeError) {
        mensajeError.remove();
        
    }
};



    export const validar = event => {
      event.preventDefault();
    
      const campos = [...event.target].filter(elemento => {
        if (elemento.hasAttribute('required')) {
          return elemento;
        }
      });
    
      const datos = {};
      campos.forEach(campo => {
        switch (campo.tagName) {
          case 'INPUT':
            // console.log(campo.type);
            break;
        
          case 'SELECT':
            // console.log(campo.type);
            break;
          
          default:
            break;
        }
    
        let nombreCampo = campo.getAttribute('name');
    
        if (campo.value.trim() == "" || campo.selectedIndex == 0) agregarspan(campo);
      
        else if (campo.className == "campoVacio") {
          removerspan(campo);
        }
        
        else datos[nombreCampo] = campo.value;
      });
    
      if(Object.keys(datos).length > 0) console.log(datos);
    };
    
    
    
    export const validarPalabras = event => {
      if (!/[a-zñáéíóú\s]/i.test(event.key) || event.target.value.length >= 10 && event.key != "Backspace") {
        event.preventDefault();
      }
    };
    
    export const validarNumeros = event => {
      if (!/[0-9]/.test(event.key) && event.key != "Backspace") {
        event.preventDefault();
      }
    };
    
    export const validarContrasena = event => {
      if(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contrasena.value)){
        alert("Contraseña Inválida!\n\n" +
          "La contraseña debería cumplir con:\n" +
          "- 1 Mayúscula\n" +
          "- 1 Caracter especial\n" +
          "- 1 número\n" +
          "- Mínimo 8 carcteres"
        );
        console.log(contrasena.value);
        
        event.preventDefault();
      }
    };
