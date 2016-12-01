var text = "Please locate where 'locate' is occures!";

document.getElementById('stm1').innerHTML = "Total Length of '"+ text + "' is: "+ text.length;

document.getElementById('stm2').innerHTML = "First locate position is "+ text.indexOf('locate');

document.getElementById('stm3').innerHTML = "Last locate position is "+ text.lastIndexOf('locate');

document.getElementById('stm4').innerHTML = "First what position is "+ text.indexOf('what');

document.getElementById('stm5').innerHTML = "If no word or character match then return -1";

document.getElementById('stm6').innerHTML = "First locate position in search method is: "+ text.search('locate');
document.getElementById('stm7').innerHTML = "search and indexOf are same. but search is more powerful";

var str = "Apple, Banana, Mango";

document.getElementById('str').innerHTML =str;
document.getElementById('stm8').innerHTML = "Start = 7 , end = 20 : "+str.slice(7,20);
document.getElementById('stm9').innerHTML = "Start = -20 , end = -7 : "+str.slice(-20,-7);
document.getElementById('stm10').innerHTML = "Start = 7: "+str.slice(7);
document.getElementById('stm11').innerHTML = "Start = -7: "+str.slice(-7);

/*Substring*/
document.getElementById('stm12').innerHTML = "Start = 7, End = 13 : "+str.substring(7, 13);

/*substr(start, end)*/
document.getElementById('stm13').innerHTML = "Start = 7, then next 6 character : "+str.substr(7, 9);

/*replace*/
function replace1(){
    var text = document.getElementById('stm14').innerHTML;
    var new_text = text.replace('microsoft', 'softograph');
    document.getElementById('stm14').innerHTML = new_text;
}

function replace2(){
    var text = document.getElementById('stm15').innerHTML;
    var new_text = text.replace(/microsoft/g, 'softograph');
    document.getElementById('stm15').innerHTML = new_text;
}

/*uppercase*/
function uppercase(){
    var text = document.getElementById('stm16').innerHTML ;
    document.getElementById('stm16').innerHTML = text.toUpperCase();
}

/*lowercase*/
function lowercase(){
    var text = document.getElementById('stm17').innerHTML ;
    document.getElementById('stm17').innerHTML = text.toLowerCase();
}

/*concat*/
var c1text = "Hello";
var c2text = "World";
document.getElementById('stm18').innerHTML ="Concate between Hello and World: "+ c1text.concat(" ",c2text);

/*charAt, charCodeAt*/
var char = document.getElementById('stm19').innerHTML ;
document.getElementById('stm20').innerHTML = "Character: "+ char.charAt(0) ; // it return character at this position.
document.getElementById('stm21').innerHTML = "ASCII Value: "+ char.charCodeAt(0); // it returns character code in this position.

//convert string to array
var text_a = "A,B,C,D,E";
var arr = text_a.split(",");
document.getElementById('stm23').innerHTML ="2nd index: "+ arr[1];

/*split caharacter*/
var sp_char = "Amanullah Aman";
var sp_arr = sp_char.split("");
var sp_text = "";
var i;
for(i = 0; i < sp_arr.length ; i++){
    sp_text+=sp_arr[i] + "<br>";
}
document.getElementById('stm24').innerHTML = sp_text ;
