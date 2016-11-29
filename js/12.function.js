var fnc = myFunction(12 , 4);

document.getElementById('fnc').innerHTML = fnc;

function myFunction(a , b){
    return a * b ;
}

/*farenhite to celcious*/
function convert(){
    var f = document.getElementById('farenhite').value;

    var c = (5/9) * (f - 32);

    document.getElementById('celc').innerHTML = c + "<sup>o</sup>C" ;
}
