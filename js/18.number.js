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
