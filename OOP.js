//Object Oriented Programming: Create a Method on an Object*********
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has 4 legs."}
};

dog.sayLegs();







//Object Oriented Programming: Make Code More Reusable with the this Keyword***************************
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






//Object Oriented Programming: Extend Constructors to Receive Arguments***********************
function Dog(name,color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("buddy", "red")







//Object Oriented Programming: Verify an Object's Constructor with instanceof***************************
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(5);
myHouse instanceof House;








//Object Oriented Programming: Understand Own Properties*************************
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);

  }
}










//Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code*************
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;


// Only change code above this line
let beagle = new Dog("Snoopy");











//Object Oriented Programming: Iterate Over All Properties**********************
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }else{
    prototypeProps.push(property);
  }
}









//Object Oriented Programming: Understand the Constructor Property*************************
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog){
    return true
  }else{
    return false
  }
}









//Object Oriented Programming: Change the Prototype to a New Object**************************
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
numLegs: 4,
 eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
