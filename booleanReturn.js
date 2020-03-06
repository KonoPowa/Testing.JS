function isLess(a, b) {
  // Only change code below this line
    return a < b;
  // Only change code above this line
}

// Change these values to test
isLess(10, 15);





var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
     count = count + 1;
    break;
  case 7:
  case 8:
  case 9:
     count = count + 0;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
     count = count - 1;
    break;
}
  if (count <= 0){
    return count + " Hold";}

  else if (count > 0){
    return count + " Bet";
  }
}
  // Only change code above this line

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');






// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line





// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
  myDog.name = "Happy Coder"
  
  
  
  
  
  
  
  // Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
  delete myDog.tails;
  
  
  
  
  
  
  
  
  // Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");







// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
  
  // Your Code Here
}

checkObj("gift");
