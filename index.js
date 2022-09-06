
/* Declaro las variables globales */

var numero1;
var numero2;
var botonClickeado;


/**
 * Pide el primer número y valida
 * @returns 
 */
function obtenerNumero1() {
    do {
        /* Pide y parsea el número */
        numero1 = parseFloat(prompt("Ingrese el valor 1"));
        /* Variable de control en true por defecto */
        var flag = true;
        /* Si es invalido el número ingresado */
        if (isNaN(numero1)) {
            /* Mensaje de alerta */
            alert("Ingrese unicamente números");
            /* Bajo la bandera */
            flag = false;
        }
        /* Si sigue en true, todo salio bien */
    } while (!flag);
    /* Devuelvo el número validado */
    console.log(`El número 1 es: ${numero1}`);
    return numero1;
}

/**
 * Pide el segundo número y valida
 * @returns 
 */
function obtenerNumero2() {

    do {
        /* Pide y parsea el número */
        numero2 = parseFloat(prompt("Ingrese el valor 2"));
        /* Variable de control en true por defecto */
        var flag = true;
        /* Si es invalido el número ingresado */
        if (isNaN(numero2)) {
            /* Mensaje de alerta */
            alert("Ingrese unicamente números");
            /* Bajo la bandera */
            flag = false;
        }
        /* Si sigue en true, todo salio bien */
    } while (!flag);
    /* Devuelvo el número validado */
    console.log(`El número 2 es: ${numero2}`);
    return numero2;
}


/**
 * Según el boton que clickee el usuario, le manda como parámetro el string que corresponda
 * @param {string}  'sumar' 'restar' 'multiplicar' 'dividir'
 * @returns 
 */
function operacion(string){
    botonClickeado = string;
    console.log(`La operación elegida es ${botonClickeado}`);
    return;
}



/**
 * Calcula el resultado de la operacion elegida por el usuario, realizada en base a las variables numero1 y numero2  
 * @param {string}   'sumar' 'restar' 'multiplicar' 'dividir'
 * @returns 
 */
function mostrar() {
    switch (botonClickeado) {
        case 'sumar': //SUMA
            console.log(`El resultado de la suma es: ${numero1 + numero2}.`);
            break;

        case 'restar': //RESTA
            console.log(`El resultado de la resta es: ${numero1 - numero2}.`);
            break;

        case 'multiplicar': //MULTIPLICACION
            console.log(`El resultado de la multiplicación es: ${numero1 * numero2} .`);
            break;

        default: //OTRA, DIVISION
            console.log(`El resultado de la división es: ${numero1 / numero2}.`);
    }

    return;
}



