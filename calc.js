

function init(){
    alert("Hola pipe");
    var pantalla = document.getElementById("resultado");
    //poner todos los botones y elementos
    var btn_1 = document.getElementById("btn_1");
    var btn_2 = document.getElementById("btn_2");

    btn_1.onclick = function(e){
        pantalla.textContent = resultado.textContent + "1";
    }
}












let a = 2, b = 2;

const sumar =(f,g)=> f+g;

const restar = (a,b) => a-b;

const multiplicar = (a,b) => a*b;

const dividir = (a,b)=> a/b;

var opcion=4;
let total = 0;

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


