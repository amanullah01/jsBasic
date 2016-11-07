/*start addition*/
var a = 10;
var b = 20;
var c = a + b;
document.getElementById('adding').innerHTML = '10 + 20 = ' + c ;

/*Start substraction*/
var d = 20;
var e = 10;
var f = d - e;
document.getElementById('sub').innerHTML = '20 - 10 = ' + f ;

/*Start Multiplication*/
var g = 20;
var h = 10;
var i = g * h;
document.getElementById('multi').innerHTML = '20 * 10 = ' + i ;

/*Start Division*/
var j = 20;
var k = 10;
var l = j / k;
document.getElementById('div').innerHTML = '20 / 10 = ' + l ;

/*Start Modulas*/
var m = 20;
var n = 10;
var o = m % n;
document.getElementById('mod').innerHTML = '20 mod 10 = ' + o ;

/*Start String operation*/
var s1 = 'Amanullah';
var s2 = 'Aman';
var s3 = s1 + ' ' + s2;
var s4 = 'Khan';
document.getElementById('str').innerHTML =  s3 ;
document.getElementById('str2').innerHTML =  s3 +=' ' + s4 ;


/*adding string and number*/
document.getElementById('sn1').innerHTML =  c ;
document.getElementById('sn2').innerHTML =  5+c ;
document.getElementById('sn3').innerHTML =  "5"+c ;
document.getElementById('sn4').innerHTML =  s4+c ;
