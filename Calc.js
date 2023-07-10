//dark mode//


const botonNumeros = document.getElementsByName("data-number");

const botonOperaciones = document.getElementsByName("data-opera");

const botonIgual = document.getElementsByName("data-igual")[0];

const botonDelete = document.getElementsByName("data-delete")[0];

const botonDark = document.getElementsByName("dark-mode");

const botonBack = document.getElementsByName("back");

var result = document.getElementById("result");

var opeActual = '';

var opeAnterior = '';

var operación = undefined;

// se realiza las constantes de lo que no se modifica y la variable result//

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});
// evento para llamar a los numeros

botonOperaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});
//evento para llamar operaciones
  
botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});
// evento para llamar boton de igual

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});
//evento para llamar boton de borrado

function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }
    operación = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}
// metodo para las operaciones
function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operación){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    } 

    opeActual = calculo;
    operación = undefined
    opeAnterior = '';
}
// evento para la secuencia de numeros string
function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}
// evento para limpiar calc
function clear(){
    opeActual ='';
    opeAnterior ='';
    operación = undefined
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();
