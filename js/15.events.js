function showDate(){
    document.getElementById('e2').innerHTML = Date();
}

/*onchange*/
function inputOnchange(){
    var text1 = document.getElementById('text1').value ;
    document.getElementById('e3').innerHTML = text1;
}

/*on click*/
function clickFunction(){
    var text2 = document.getElementById('text2').value;
    document.getElementById('e4').innerHTML = text2 ;
}

/*On mouse over*/
function mouseOverFunction(){
    document.getElementById('e5').innerHTML = 'Mouse over event called';
}

/*on mouse out*/
function mouseOutFunction(){
    document.getElementById('e6').innerHTML = 'Mouse out event called';
}

/*on load*/
function loadFunction(){
    document.getElementById('e7').innerHTML = 'On load event called';
}
window.load = loadFunction();

/*On key up function*/
function keyUpFunction(){
    var text3 = document.getElementById('text3').value;
    document.getElementById('e8').innerHTML = text3 ;
}

/*on key down*/
function keyDownFunction(){
    var text4 = document.getElementById('text4').value ;
    document.getElementById('e9').innerHTML = text4 ;
}
