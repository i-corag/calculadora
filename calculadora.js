
const sumar = require ("./funciones/sumar");
const restar = require ("./funciones/restar");
const dividir = require ("./funciones/dividir");
const multiplicar = require ("./funciones/multiplicar");

const accion = process.argv[2];
const num1 = parseInt (process.argv[3]);
const num2 = parseInt (process.argv[4]);

if (!accion || !num1 || !num2) return;

switch (accion) {
    case "suma" :{
        const resultado = sumar (num1,num2);
        console.log (num1,' + ',num2, ' = ',resultado);
        break;
    }
    case "resta" :{
        const resultado = restar (num1,num2);
        console.log (num1,' - ',num2, ' = ',resultado);
        break;
    }
    case "multiplicacion" :{
        const resultado = multiplicar (num1,num2);
        console.log (num1,' * ',num2, ' = ',resultado);
        break;
    }
    case "division" :{
        const resultado = dividir (num1,num2);
        console.log (num1,' / ',num2, ' = ',resultado);
    }
    default: {
        console.log ('Esta accion no esta definida');
    }
}

