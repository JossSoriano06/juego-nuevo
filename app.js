
let numeroSecreto = GenerarNumeroSegreto();
let intentos = 1;
let listaNumerosSortiados = []; 
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML =  document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
} 
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' } `);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
   }
    else{
        if(numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número es mayor '); 
        }
        else{asignarTextoElemento('p', 'El número es menor ');}
        intentos++;
        limpiarCaja(); 
    } 
   
    
  
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector ('#valorUsuario').value = ''; 
}

function GenerarNumeroSegreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    //si el numero generado esta en la lista 
    if (listaNumerosSortiados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se soritiaron todos los números posibles');
    }    else {
            if (listaNumerosSortiados.includes(numeroGenerado)) {
                return GenerarNumeroSegreto ();
            } else{
                listaNumerosSortiados.push (numeroGenerado);
                return numeroGenerado;
            }
        }
    
    

    
}
function condicionesIniciales() {
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSegreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    condicionesIniciales();
    //Generar el número aleatorio
    
    //Deshabilitar el boton de nuevo juego 
    //inicializar el numero de intentos 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();




