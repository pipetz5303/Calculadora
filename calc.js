//atributos
let primerNumero;
let segundoNumero;
let operador= " ";
let total = 0;

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
    const btn_borrar = document.getElementById("btn_borrar");
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
    //si ya tiene punto lo omite.
    btn_punto.onclick = function(e){
        pantalla.textContent = !pantalla.textContent.includes(".") ? pantalla.textContent += "." : pantalla.textContent;
    }
    //ac borra todo y lo limpia
    btn_ac.onclick = function(e){
        limpiar();
        operador = 1;
    }
    //borrar quita el ultimo digitado
    btn_borrar.onclick= function(e){
        let numeroIngresado = pantalla.textContent;
        if(numeroIngresado !=0){
            pantalla.textContent = numeroIngresado.slice(0, numeroIngresado.length-1);
            if(pantalla.textContent== ""){
                pantalla.textContent = "0";
            }
        }
        
    }

    btn_negativo.onclick = function(e){
        //si no tiene se le agrega - y sino quitamos el - 
        if(pantalla.innerHTML==="0"){
            alert("no puedes pasar 0 a negativo");
        }else if(!pantalla.innerHTML.startsWith("-")){
            pantalla.innerHTML = `-${pantalla.innerHTML}`;
        }else{
            pantalla.innerHTML = pantalla.innerHTML.slice(1);
        }       
    }

    btn_sumar.onclick = function(e){
        primerNumero = pantalla.innerHTML;
        revisarResultado(operador);
        operador = "+";
        
        validarOperador(primerNumero, operador);
    }

    btn_restar.onclick = function(e){
        primerNumero = pantalla.innerHTML;
        revisarResultado(operador);
        operador = "-";
        validarOperador(primerNumero, operador);

    }

    btn_multiplicar.onclick = function(e){
        primerNumero = pantalla.innerHTML;
        revisarResultado(operador);
        operador = "*";
        //valida el numero porque a veces solo queremos cambiar el operador
        validarOperador(primerNumero, operador);
    }

    btn_division.onclick = function(e){
        primerNumero = pantalla.innerHTML;
        revisarResultado(operador);
        operador = "/";
        validarOperador(primerNumero, operador);
    }

    btn_igual.onclick= function(e){
        //pasar la operacion completa a arriba
        if(operador ===1){
            operacion.innerHTML= pantalla.innerHTML;
        }else if(isNaN(operador)){
            console.log(operador);
            primerNumero = operacion.innerHTML.slice(0,operacion.innerHTML.length-2);
            segundoNumero = pantalla.innerHTML;
            let resultado = calcular(primerNumero, segundoNumero, operador);
            //dejar resultado
            operacion.innerHTML += ` ${segundoNumero}`;
            pantalla.innerHTML = resultado;
            operador = 1;
        }
    }
}

function revisarResultado(op){
    if(operador === 1){
        operacion.innerHTML = `${pantalla.innerHTML}  `;
        pantalla.innerHTML = "0";
    }

}

function limpiar(){
    operacion.innerHTML="0";
    pantalla.innerHTML = "0";
}

function cambiarOperador(texto, operador){
    let textoAux = texto.slice(0, texto.length-1);
    textoAux += operador;
    return textoAux;
}

//revisa y compara el operador, para hacer cambio de operador sin perder el numero 1
function validarOperador(primerNumero, signoOperacion){
    if(operacion.innerText === "0"){
        operacion.innerHTML = `${primerNumero} ${signoOperacion}`;
        pantalla.innerHTML = "0";
    }else{
        operacion.innerHTML = cambiarOperador(operacion.innerHTML, signoOperacion);
    }
    


}

function calcular(a,b, operadorF){
    const sumar =(a,b)=> Number(a)+ Number(b);

    const restar = (a,b) => Number(a)-Number(b);

    const multiplicar = (a,b) => Number(a)*Number(b);

    const dividir = (a,b)=> Number(a)/Number(b);

    var opcion=operadorF;

    switch(opcion){
        case "+": 
            total = sumar(a,b);
            break;
        case "-": 
            total = restar(a,b);
            break;
        
        case "*": 
            total = multiplicar(a,b);
            break;
        case "/": 
            if(b != 0){
                total = dividir(a,b);
            }else{
                alert("no se divide entre 0");
                total = "Error. 0 Indefinido";
            }
            break;

        default:
            
            total =0;
            break;
    }

    return total;
}



