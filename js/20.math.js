document.getElementById('h1').innerHTML = 'The JavaScript Math object allows you to perform mathematical tasks on numbers.';
document.getElementById('m1').innerHTML = 'Value of pi: Math.PI = '+ Math.PI;
document.getElementById('m2').innerHTML = 'Value of pi: Math.PI = '+ Math.PI.toFixed(4);

document.getElementById('h2').innerHTML = 'Math.round(x) returns the value of x rounded to its nearest integer:';
document.getElementById('m3').innerHTML = 'Value of pi: 4.4 round = '+ Math.round(4.4);
document.getElementById('m4').innerHTML = 'Value of pi: 4.6 round = '+ Math.round(4.6);

document.getElementById('h3').innerHTML = 'Math.pow(x,y) returns the value of x to the power y:';
document.getElementById('m5').innerHTML = '8 to the power 2  = '+ Math.pow(8,2);
document.getElementById('m6').innerHTML = '8 to the power 3  = '+ Math.pow(8,3);

document.getElementById('h4').innerHTML = 'Math.sqrt(x) returns the square root of x:';
document.getElementById('m7').innerHTML = '64 sqrt  = '+ Math.sqrt(64);
document.getElementById('m8').innerHTML = '64 sqrt  = '+ Math.sqrt(125);

document.getElementById('h5').innerHTML = 'Math.abs(x) returns the absolute (positive) value of x:';
document.getElementById('m9').innerHTML = 'Math.abs(-10.2365)  = '+ Math.abs(10.23654);

document.getElementById('h6').innerHTML = 'Math.ceil(x) returns the value of x rounded up to its nearest integer';
document.getElementById('m10').innerHTML = 'Math.ceil(4.4)  = '+ Math.ceil(4.4);

document.getElementById('h7').innerHTML = 'Math.floor(x) returns the value of x rounded down to its nearest integer';
document.getElementById('m11').innerHTML = 'Math.ceil(4.4)  = '+ Math.floor(4.4);
