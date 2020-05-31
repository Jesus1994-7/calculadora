const resultado = document.getElementById('resultado');
const botones = document.getElementById('botones');

let operacionCompleta = false;
/*
    1.- CADA VEZ QUE SE PULSE UN BOTON SE AÑADIRÁ AL DIV DONDE LA ESCRIBIMOS
    2.- EL IF ES PARA QUE SE BORRE EL 0 CUANDO EMPEZAMOS A ESCRIBIR

*/
const escribeOperacion = text => {
    if(resultado.textContent==0) {
        
        resultado.textContent = "";
    } 
    if(operacionCompleta && !isNaN(text)){
        resultado.textContent = '';
        operacionCompleta = false;
    } 
    resultado.textContent += text;
}
/*
    1.- LA FUNCION 'escribeResultado()' SE LANZARA AL PULSAR LA TECLA '='
    2.- ESTA FUNCION COGE EL VALOR QUE HAY EN EL DIV(resultado) Y CON OTRA FUNCION 'eval()'
    3.- LA FUNCION 'eval' ANALIZA CUALQUIER OPERACION PASADA POR STRING Y LA RESUELVE
*/
const escribeResultado = () => {
    resultado.textContent = eval(resultado.textContent)
    operacionCompleta = true;
} 

const reiniciarPantalla = () => {
    resultado.textContent = '0';
}
/* 
   1.- PONGO TODOS LOS BOTONES A LA ESCUCHA DEL EVENTO 'CLICK'
   2.- AL SUCEDER ESE CLICK SE LANZA UN EVENTO QUE LANZA UN SWITCH
   3.- ESTE SWITCH ANALIZA EL CONTENIDO DE ESOS BOTONES Y LANZARÁ DIFERENTES FUNCIONES SEGUN EL QUE SE PULSE
   4.- EN EL CASO DE NO PULSAR '=' O 'C' SE LANZARA LA FUNCION 'escribeOperacion()'
   5.- ESTA FUNCION COGERÁ EL CONTENIDO DEL BOTON PULSADO 
*/    
botones.addEventListener('click', e => {
    
        switch(e.target.textContent){
            case '=' : escribeResultado();break;
            case 'C' : reiniciarPantalla(); break;
            
            
            default : escribeOperacion(e.target.textContent); break;   
        }
})