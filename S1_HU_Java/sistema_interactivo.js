// variables del codigo//
const nombre = prompt("ingrese su nombre por favor");
const entrada = prompt("ingrese su edad por favor");
const edad = parseInt(entrada);

// validacion de la edad en numeros //
if (isNaN (edad)) {
    console.error ("Por favor, ingresa una edad válida en números.");
    
} else if (edad < 18) {
    alert(`hola ${nombre}, eres menor de edad. ¡sigue aprendiendo y disfrutando del codigo!`);
} else{
    alert(`hola ${nombre}, eres mayor de edad.¡preparate para grandes oportunidades en el mundo de la programacion!`);
}