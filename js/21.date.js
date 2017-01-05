document.getElementById('d1').innerHTML = 'Today ='+Date();
document.getElementById('d2').innerHTML = 'Todays Date using date Object:  ='+new Date();
document.getElementById('d3').innerHTML = 'Date Object:  ='+new Date("October 13, 2017 11:13:00");
document.getElementById('d4').innerHTML = 'Date object using milisecond:  ='+new Date(86400000);
document.getElementById('d5').innerHTML = 'Date object using all parameters (year,month,day, hour, minute, sec, milisecond):  ='+new Date(2017, 5, 24, 11, 33, 30, 0);
document.getElementById('d6').innerHTML = 'Date object using some parameters (year,month,day):  ='+new Date(2017, 5, 24);

document.getElementById('d7').innerHTML = 'Date toString():  ='+new Date().toString();
document.getElementById('d8').innerHTML = 'Date toUTCString():  ='+new Date().toUTCString();
document.getElementById('d9').innerHTML = 'Date toDateString():  ='+new Date().toDateString();
