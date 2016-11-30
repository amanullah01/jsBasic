var car = {name: 'BMW', type: 'New', model: '2016', color: 'Black'};
document.getElementById('obj1').innerHTML = "Your car name is "+ car.name + ". This is brand "+ car.type + ". Model is "+ car.model + " And color is "+ car.color;

var person = {
  firstName: 'Amanullah',
  lastName: 'Aman',
  age: 26,
  fullName: function(){
    return this.firstName + " "+ this.lastName;
  }
};
document.getElementById('obj2').innerHTML = "Full Name is: "+ person.fullName() + " And age is: "+person['age'];
