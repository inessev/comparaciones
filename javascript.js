alert ("Escriba dos números para hacer una serie de comparaciones");
var number1= prompt("Escriba aquí el primer numero");
var number2= prompt("Escriba aquí el segundo numero");
let resultado = number1 > number2; 
alert("El " + number1+ " es mayor que el "+ number2+" = "+ resultado );
let resultado2 = number1 <= number2; 
alert("El " + number1+ " es menor o igual que el "+ number2+" = "+ resultado2 );
if(number1%2==0){
    alert("El número "+ number1+" es par");
}else{
    alert("El número "+ number1+" es impar");
}
if(number2%2==0){
    alert("El número "+ number2+" es par");
}else{
    alert("El número "+ number2+" es impar");
}
