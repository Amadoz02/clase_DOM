export const valida = (e) => {
    e.preventDefault(); // Previene el envío del formulario por defecto
    const campos = [...e.target].filter((elemento) => {
        return elemento.hasAttribute("required"); // Filtra los campos con el atributo "required"
    });
    campos.forEach(campo => {
        console.log(campo);
        if (campo.value == "") { // Si el campo está vacío
            campo.classList.add("campoVacio"); // Añade la clase para estilos visuales
            const span = document.createElement("span");
            span.classList.add("span");
            span.textContent = `Ingresar ${campo.getAttribute("name")} es obligatorio`;

            // Revisa si ya existe un mensaje de error para evitar duplicados
            if (!campo.nextElementSibling || !campo.nextElementSibling.classList.contains("span")) {
                campo.parentNode.insertBefore(span, campo.nextSibling); // Inserta el mensaje justo después del campo
            }
            console.log(`El campo ${campo.getAttribute("name")} es obligatorio`);
        } else {
            // Si el campo no está vacío, elimina mensajes de error previos
            campo.classList.remove("campoVacio");
            if (campo.nextElementSibling && campo.nextElementSibling.classList.contains("span")) {
                campo.nextElementSibling.remove();
            }
        }
    });
};
