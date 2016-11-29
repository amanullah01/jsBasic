var x = 16;
var st = 'Hello';
document.getElementById('ns').innerHTML = x+st;
document.getElementById('ns1').innerHTML = 16 + 4 + st;
document.getElementById('ns2').innerHTML = st + 16 + 4 ;

/*dynamic type*/
var dt;
var dt = 16;
var dt = 'Hello World';
document.getElementById('dt1').innerHTML = dt ;

/*String*/
var st1 = "This is ' Aman '";
var st2 = "It's me";
document.getElementById('st1').innerHTML = st1 ;
document.getElementById('st2').innerHTML = st2 ;

/*Numbers*/
var num1 = 35;
var num2 = 35.00;
var num3 = 35e5;
var num4 = 35e-5;
document.getElementById('num1').innerHTML = "35 = " + num1 ;
document.getElementById('num2').innerHTML = "35.00 = " + num2 ;
document.getElementById('num3').innerHTML = "35e5 = " + num3 ;
document.getElementById('num4').innerHTML = "35e-5 = " + num4 ;

/*Array*/
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById('arr1').innerHTML = cars[2] ;

/*objects*/
var person = {firstName:'Amanullah', lastName: 'Aman', age:26, color:'Brown'};
document.getElementById('obj1').innerHTML = 'First Name: '+ person.firstName + '<br>Last Name: '+ person.lastName + '<br>Age: '+ person.age + '<br>Color: '+ person.color;

/*Type of operator*/

document.getElementById('type1').innerHTML = 'Type of Aman = ' + typeof "Aman" + "<br> Type of 33 = " + typeof 33 +
"<br>Type of 33.00 = " + typeof 33.00 + "<br> Type of true = " + typeof true + "<br>Type of ['Aman', '26', 'Black'] = " + typeof ['Aman', '26', 'Black'] +
"<br> Type of {firstName:'Aman', age:'50'} = "+ typeof {firstName:'Aman', age:'50'} ;

/*undefined*/
var und ;
document.getElementById('und1').innerHTML = und + " " + typeof und;

/*Empty values*/
var emp = '';
document.getElementById('emp1').innerHTML = "Emp = " + emp + "<br>Type = " + typeof emp;

/*Null values*/
var nv1 = null;
document.getElementById('null').innerHTML = "Null = " + nv1 + "<br>Type = " + typeof nv1;

/*diff*/
document.getElementById("diff").innerHTML =
typeof undefined + "<br>" +
typeof null + "<br>" +
(null === undefined) + "<br>" +
(null == undefined);
