//CALCULADORA 👍
let resultado=0;
let nrosConcatenados='';
let valorIngresado=0;
let valorA=0;
let valorB='';
let guardoOperacion='';


//CAPTURO LOS BOTONES 👍
let botones=document.getElementsByClassName('numeros');

//AGREGO EVENTO A CADA BOTON 👍
for(let i=0;i<botones.length;i++){

    botones[i].addEventListener('click',function(){
     
        switch(botones[i].id){           
            case"sumar":
                document.getElementById('resultado').innerHTML+=" + ";
                sumar();
                guardoOperacion='suma';
                break;

            case"restar":
                document.getElementById('resultado').innerHTML+=" - ";
                restar();
                guardoOperacion='resta';
                break;

            case"multiplicar":
                document.getElementById('resultado').innerHTML+=" * ";
                valorA=nrosConcatenados;
                valorB=0;
                multiplicar(valorA);
                guardoOperacion='multiplicacion';
                resultado=0;
                break;

            case"dividir":
                document.getElementById('resultado').innerHTML+=" / ";
                valorA=nrosConcatenados;
                valorB=0;
                dividir(valorA);
                guardoOperacion='division';
                resultado=0;
                break;

            case"igual":
                document.getElementById('resultado').innerHTML+=" = ";
                igual();
                break; 

            default:
                btnApretado=botones[i].id;
                if(botones[i].id=='coma'){
                   valorIngresado='.';
                } else{
                   valorIngresado=botones[i].id;
                }   
                
                nrosConcatenados+=valorIngresado;
                valorB+=valorIngresado;
                document.getElementById('resultado').innerHTML+=valorIngresado;            
                break;
        }
    },true)
}

//SUMA 👍
function sumar(){
    valorA=parseFloat(nrosConcatenados);
    resultado=resultado+valorA;   
    document.getElementById('total').innerHTML=resultado;
    nrosConcatenados=''; 
}
    
//RESTA 👍
function restar(){
    valorA=parseFloat(nrosConcatenados);
    resultado=(resultado*-1)-valorA;
    document.getElementById('total').innerHTML=resultado;   
    nrosConcatenados=''; 
}              
  
//MULTIPLICACION 👍
function multiplicar(){   
    resultado=valorA*valorB;
}

//DIVISION 👍
function dividir(){    
    resultado=valorA/valorB;      
}

//IGUAL 👍
function igual() {
    switch(guardoOperacion){
        case 'suma':
            sumar()
        break;

        case 'resta':
            restar()
        break;

        case 'multiplicacion':
            multiplicar()
            document.getElementById('total').innerHTML=resultado;
            nrosConcatenados='';    
        break;

        case 'division':
            dividir()
            document.getElementById('total').innerHTML=resultado;
            nrosConcatenados='';    
        break;
    }
guardoOperacion='';  
}    


//COLOCA FOCO EN DISPLAY 👍
function inputFocus(){    
    document.getElementById("resultado").focus();
}
inputFocus();


//BORRA DISPLAY y LIMPIA VARIABLES 👍
function borrar() { 
    resultado=0;
    nrosConcatenados='';
    valorA=0;
    valorB='';
    guardoOperacion='';
    valorIngresado=0; 
    document.getElementById("resultado").innerHTML='';
    document.getElementById("total").innerHTML='';
    inputFocus();
}

