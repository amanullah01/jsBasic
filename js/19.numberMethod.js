var num1 = 100;
document.getElementById('num1').innerHTML = 'toString() Return a number as string'+ num1.toString();
document.getElementById('num2').innerHTML = '(100+50)toString() Return a number as string = '+ (100 + 50).toString();

document.getElementById('h2').innerHTML = 'toExponential() returns a string, with a number rounded and written using exponential notation.';

var num2 = 9.652 ;
document.getElementById('num3').innerHTML = num2.toExponential(2);
document.getElementById('num4').innerHTML = num2.toExponential(4);
