//Object Oriented Programming: Create a Method on an Object*********
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has 4 legs."}
};

dog.sayLegs();







//Object Oriented Programming: Make Code More Reusable with the this Keyword*************************
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();










//Object Oriented Programming: Define a Constructor Function*********************************
function Dog(){
  this.name = "fido";
  this.color = "red";
  this.numLegs = 4;
}







//Object Oriented Programming: Use a Constructor to Create Objects****************************
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
