var a = 10;
var b = 20;
var c = a + b;
document.getElementById('add').innerHTML = '10 + 20 = ' +(a+b) ;
document.getElementById('sub').innerHTML = '20 - 10 = ' +(b-a) ;
document.getElementById('mul').innerHTML = '20 * 10 = ' +(b*a) ;
document.getElementById('div').innerHTML = '20 / 10 = ' +(b/a) ;
document.getElementById('mod').innerHTML = '20 % 10 = ' +(b%a) ;
document.getElementById('inc').innerHTML = '++20 = ' +(++b) ;
document.getElementById('dec').innerHTML = '--10 = ' +(--a) ;
document.getElementById('precedence1').innerHTML = '100 + 50 * 3 = ' +(100 + 50 * 3) ;
document.getElementById('precedence2').innerHTML = '(100 + 50) * 3 = ' +((100 + 50) * 3) ;