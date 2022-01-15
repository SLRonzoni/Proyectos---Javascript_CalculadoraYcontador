//  CONTADOR
let contador=0;
function aumentar() {   
    contador=contador+1;
    console.log('contador: '+contador);
    document.getElementById('mostrar').innerHTML=contador;
}

function disminuir() {   
    contador=contador-1;
    console.log('contador: '+contador);
    document.getElementById('mostrar').innerHTML=contador;
}

function resetear() {   
    contador=0;
    console.log('contador: '+contador);
    document.getElementById('mostrar').innerHTML=contador;
}