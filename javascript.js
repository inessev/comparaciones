alert ("Escriba dos números para hacer una serie de comparaciones");
var number1= prompt("Escriba aquí el primer numero");
var number2= prompt("Escriba aquí el segundo numero");

if(number1>number2){
    alert("El mayor es "+ number1);
}else{
    alert("El mayor es "+ number2);
}

if(number1<=number2){
    alert("El número "+ number1+" es menor o igual que "+ number2);
}else{
    alert("El número "+ number1+" NO es menor o igual que "+ number2);
}

if(number2%2==0){
    alert("El número "+ number2+" es par");
}else{
    alert("El número "+ number2+" es impar");
}

