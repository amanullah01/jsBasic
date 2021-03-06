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

document.getElementById('h5').innerHTML = 'The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.';
document.getElementById('num10').innerHTML = (100.23).valueOf();

document.getElementById('h6').innerHTML = 'Number() can be used to convert JavaScript variables to numbers:';
document.getElementById('num11').innerHTML = 'x = true => '+ Number(true);
document.getElementById('num12').innerHTML = 'x = false => '+ Number(false);
document.getElementById('num13').innerHTML = 'x = new Date() => '+ Number(new Date());
document.getElementById('num14').innerHTML = 'x = 10 => '+ Number(10);
document.getElementById('num15').innerHTML = 'x = "10" => '+ Number("10");
document.getElementById('num16').innerHTML = 'x = "10 220" => '+ Number("10 220");
document.getElementById('num17').innerHTML = 'x = "Aman" => '+ Number("Aman");

document.getElementById('h7').innerHTML = 'parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:';
document.getElementById('num18').innerHTML = 'x = 10 => '+ parseInt("10");
document.getElementById('num19').innerHTML = 'x = 10.23 => '+ parseInt("10.23");
document.getElementById('num20').innerHTML = 'x = 10 20 30 => '+ parseInt("10 20 30");
document.getElementById('num21').innerHTML = 'x = 10 years => '+ parseInt("10 Years");
document.getElementById('num22').innerHTML = 'x = "years 10" => '+ parseInt("Years 10");
document.getElementById('num23').innerHTML = 'x = "Aman" => '+ parseInt("Aman");

document.getElementById('h8').innerHTML = 'parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:';
document.getElementById('num24').innerHTML = 'x = 10 => '+ parseFloat("10");
document.getElementById('num25').innerHTML = 'x = 10.23 => '+ parseFloat("10.23");
document.getElementById('num26').innerHTML = 'x = 10 20 30 => '+ parseFloat("10 20 30");
document.getElementById('num27').innerHTML = 'x = 10 years => '+ parseFloat("10 Years");
document.getElementById('num28').innerHTML = 'x = "years 10" => '+ parseFloat("Years 10");
document.getElementById('num29').innerHTML = 'x = "Aman" => '+ parseFloat("Aman");
