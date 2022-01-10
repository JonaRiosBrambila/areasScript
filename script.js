//Este es un comentario de una línea

/* Este es un comentario multilinea
Varias líneas
Varias lineas 
*/
//Este es una alerta
/*
alert ("Estoy vivo!!!");

console.log(
    "Este es un mensaje para la consola"
);
var nombre = "Jonatan Rafael";
var apellido = "Rios Brambila";
var edad = 29;

console.log(nombre,apellido,edad);
alert("Mi nombre es: " + nombre);
console.log("Mis apellidos son: " + apellido);

alert ("Mi nombre es: " + nombre + " ,mis apellidos son: " + apellido + " y mi edad es: " + edad );

//otro ejemplo de como mostrar variables en consola

var numero1 = 5;
var numero2 = 7;
var resultado = numero1 + numero2;

console.log("El resultado de la suma es: " + resultado);

//sintaxis básica de una función
function nombrefuncion (parametros){

}
*/

//Declaracion de funcion
function Saludar(){
    alert ("Hola a todos");
}
Saludar();

//Expresión de función

var cantar = function(){
    alert ("A mi me gusta cantar");
}
cantar();

//Función sin parametros

function sumar (){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert("La suma de la funcion sin parametros es: " + suma);
}
sumar();

//Función con parametros
function restar (numero1, numero2,resta){
    var num1 = 8;
    var num2 = 6;
    var resta = num1 - num2;
    alert("La resta de la funcion con parametros: " + resta);
}
restar();

//Otra funci;on con parametros

function cuadrado (cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert ("El cuadrado del numero es: " + rescuadrado);
}
 cuadrado(4);

 function operaciones (num1, num2, num3, suma, resta, multi){
     var suma = num1 + num2 + num3;
     var resta = num1 - num2 - num3;
     var multi = num1 * num2 * num3;

     alert ("La suma es: " + suma + ", La resta es: " + resta + ",La multiplicacion es: " + multi);
}

operaciones(5,6,7);

//función área rectangulo

function areaRectangulo(){
    
    var base = 5;
    var altura = 7;
    
    var area = base * altura
    
    alert("El area del rectangulo es igual a: "+ area);
    
    
    }
    areaRectangulo();
    
    //area circulo

    function areaCirculo(radio){
        var pi = 3.1416;
    function areaRectangulo(){
        
    var base = 5;
    var altura = 7;
    
    var area = base * altura
    
    alert("El area del rectangulo es igual a: "+ area);
    
    }
     areaRectangulo();
    
     //areaCirculo

    function areaCirculo(radio){
        var pi = 3.1416;
        var resultado = pi * (radio**2);
        console.log("El area del circulo es igual a: " + resultado);
    }
    
    areaCirculo(5);

    //areaTriangulo
    
    function areaTriangulo(base,altura){
        var area = (base * altura)/2;
        alert("El area del triangulo: " + area );
        
    }
    
    areaTriangulo(10,5);
}