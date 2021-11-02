//atributos
let primerNumero;
let segundoNumero;
let operador;
let total=0;

const operacion = document.getElementById("historico");
const pantalla = document.getElementById("resultado");

function init(){
    
    
    //poner todos los botones y elementos
    const btn_1 = document.getElementById("btn_1");
    const btn_2 = document.getElementById("btn_2");
    const btn_3 = document.getElementById("btn_3");
    const btn_4 = document.getElementById("btn_4");
    const btn_5 = document.getElementById("btn_5");
    const btn_6 = document.getElementById("btn_6");
    const btn_7 = document.getElementById("btn_7");
    const btn_8 = document.getElementById("btn_8");
    const btn_9 = document.getElementById("btn_9");
    const btn_0 = document.getElementById("btn_0");
    const btn_ac = document.getElementById("btn_ac");
    const btn_negativo = document.getElementById("btn_negativo");
    const btn_porcentaje = document.getElementById("btn_porcentaje");
    const btn_division = document.getElementById("btn_division");
    const btn_multiplicar = document.getElementById("btn_multiplicacion");
    const btn_restar = document.getElementById("btn_resta");
    const btn_sumar = document.getElementById("btn_suma");
    const btn_punto = document.getElementById("btn_punto");
    const btn_igual = document.getElementById("btn_igual");




    // operador ternario para ver si esta en pantalla inciial
    btn_1.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "1": pantalla.textContent += "1";
    }

    btn_2.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "2": pantalla.textContent += "2";
    }

    btn_3.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "3": pantalla.textContent += "3";
    }

    btn_4.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "4": pantalla.textContent += "4";
    }

    btn_5.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "5": pantalla.textContent += "5";
    }

    btn_6.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "6": pantalla.textContent += "6";
    }

    btn_7.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "7": pantalla.textContent += "7";
    }

    btn_8.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "8": pantalla.textContent += "8";
    }

    btn_9.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "9": pantalla.textContent += "9";
    }

    btn_0.onclick = function(e){
        pantalla.textContent = pantalla.textContent == "0" ? pantalla.textContent = "0": pantalla.textContent += "0";
    }

    btn_punto.onclick = function(e){
        pantalla.textContent = !pantalla.textContent.includes(".") ? pantalla.textContent += "." : pantalla.textContent;
    }

    btn_ac.onclick = function(e){
        limpiar();
    }

    btn_negativo.onclick = function(e){
        //si no tiene se le agrega - y sino quitamos el - 
        if(pantalla.innerHTML==="0"){
            //si es 0 no hace nada
        }else if(!pantalla.innerHTML.startsWith("-")){
            pantalla.innerHTML = `-${pantalla.innerHTML}`;
        }else{
            pantalla.innerHTML = pantalla.innerHTML.slice(1);
        }       
    }

    btn_sumar.onclick = function(e){
        primerNumero = pantalla.innerHTML;
        operador = "+";
        operacion.innerHTML = `${primerNumero} ${operador}`;
        pantalla.innerHTML = "0";
    }

    btn_restar.onclick = function(e){
        primerNumero = pantalla.innerHTML;
        operador = "-";
        operacion.innerHTML = `${primerNumero} ${operador}`;
        pantalla.innerHTML = "0";
    }

    btn_multiplicar.onclick = function(e){
        primerNumero = pantalla.innerHTML;
        operador = "*";
        operacion.innerHTML = `${primerNumero} ${operador}`;
        pantalla.innerHTML = "0";
    }

    btn_division.onclick = function(e){
        primerNumero = pantalla.innerHTML;
        operador = "/";
        operacion.innerHTML = `${primerNumero} ${operador}`;
        pantalla.innerHTML = "0";
    }
}



function limpiar(){
    operacion.innerHTML="0";
    pantalla.innerHTML = "0";
}


let a , b = 2;




/*todo: 
    FALTA poner las funciones de operaciones, porcentaje, igual
    cambiar pantalla de operaciones


*/
const sumar =(f,g)=> f+g;

const restar = (a,b) => a-b;

const multiplicar = (a,b) => a*b;

const dividir = (a,b)=> a/b;

var opcion=4;


switch(opcion){
    case 1: 
        total = sumar(a,b);
        console.log(total);
        break;
    case 2: 
        total = restar(a,b);
        console.log(total);
        break;
    
    case 3: 
        total = multiplicar(a,b);
        console.log(total);
        break;
    case 4: 
        if(b != 0){
            total = dividir(a,b);
            console.log(total);
        }else{
            console.log("no se divide entre 0");
        }
        break;

    default:
        console.log("no valido");
        break;
}


