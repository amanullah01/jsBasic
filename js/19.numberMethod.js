var num1 = 100;
document.getElementById('num1').innerHTML = 'toString() Return a number as string'+ num1.toString();
document.getElementById('num2').innerHTML = '(100+50)toString() Return a number as string = '+ (100 + 50).toString();

document.getElementById('h2').innerHTML = 'toExponential() returns a string, with a number rounded and written using exponential notation.';

var num2 = 9.652 ;
document.getElementById('num3').innerHTML = num2.toExponential(2);
document.getElementById('num4').innerHTML = num2.toExponential(4);


document.getElementById('h3').innerHTML = 'toFixed() returns a string, with the number written with a specified number of decimals:';
document.getElementById('num5').innerHTML = 'toFixed(0) = '+num2.toFixed();
document.getElementById('num6').innerHTML = 'toFixed(2) = '+num2.toFixed(2);
document.getElementById('num7').innerHTML = 'toFixed(5) = '+num2.toFixed(5);

document.getElementById('h4').innerHTML = 'toPrecision() returns a string, with a number written with a specified length:';
document.getElementById('num8').innerHTML = num2.toPrecision(2);
document.getElementById('num9').innerHTML = num2.toPrecision(4);
