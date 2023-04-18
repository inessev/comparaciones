alert ("Escriba dos números para hacer una serie de comparaciones");
var number1= prompt("Escriba aquí el primer numero");
var number2= prompt("Escriba aquí el segundo numero");

if(number1>number2){
    alert("El "+ number1+ " es mayor que el "+ number2);
}else if(number1<number2){
    alert("El "+ number1+ " es menor que el "+ number2);
}

if(number1==number2){
    alert("El "+ number1+ " es igual que el "+ number2);
}
if(number2%2==0){
    alert("El "+ number2+" es par");
}else{
    alert("El "+ number2+" es impar");
}
