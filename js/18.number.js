var equ = (0.2 * 10 + 0.1 * 10) / 10 ;
document.getElementById('num1').innerHTML = "(0.2 * 10 + 0.1 * 10) / 10 = "+equ ;


var num = 128 ;
document.getElementById('num2').innerHTML = num+" = ???<br>In Decimal: "+num +
"<br> In Hexadecimal: "+num.toString(16) +
"<br> In Octal : "+num.toString(8) +
"<br>In Binary: "+num.toString(2);

document.getElementById('num3').innerHTML = "Type of infinity is: "+ typeof(Infinity);

function stopWhenInfinity(){
  var number = 2;
  var text = "";
  while(number != Infinity ){
      number = number * number ;
      text += number+"<br>" ;
      document.getElementById("num4").innerHTML = text ;
  }
}

//nan
document.getElementById('num5').innerHTML = "Type of NaN is: "+ typeof NaN;
var x = 100;
var y = "Apple";
var z = x / y ;
document.getElementById('num6').innerHTML = "100 / 'Apple' = "+ z + '. Is it NaN: ' + isNaN(z);
var a = 100;
var b = "20";
var c = a / b ;
document.getElementById('num7').innerHTML = "100 / '10' = "+ c + '. Is it NaN: ' + isNaN(c);
var d = NaN;
var e = "20";
var f = d + e ;
document.getElementById('num8').innerHTML = "NaN + '20' = "+ f + '. Is it NaN: ' + isNaN(f);
var g = NaN;
var h = 20;
var i = g + h ;
document.getElementById('num9').innerHTML = "NaN + 20 = "+ i + '. Is it NaN: ' + isNaN(i);

//js object
var o_num1 = 500;
var o_num2 = new Number(500);

document.getElementById('num10').innerHTML = o_num1+' '+ typeof o_num1 + " "+ o_num2+' '+typeof o_num2;
document.getElementById('num11').innerHTML = o_num1 == o_num2 ;
document.getElementById('num12').innerHTML = o_num1 === o_num2 ;
