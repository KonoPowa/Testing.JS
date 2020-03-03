var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

var ourStr = "This is the first sentence. ";
ourStr += "This is the second sentence.";
console.log(ourStr);

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [
    [10, 11, 12], 13, 14
  ]
];
var myData = myArray[2][1];
console.log(myData);

var myArray = [
  ["John", 23],
  ["cat", 2]
];
myArray.push(["dog", 3])
console.log(myArray);

var myArray = [
  ["John", 23],
  ["cat", 2]
];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

var myArray = [
  ["John", 23],
  ["dog", 3]
];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

var myArray = [
  ["John", 23],
  ["dog", 3]
];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray);

var myList = [
  ["milk", 2],
  ["bananas", 3],
  ["pancakes", 4],
  ["bacon", 20],
  ["napalm", 100]
];
console.log(myList);


function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(20, 5);


function timesFive(num) {
  return num * 5;
}
console.log(timesFive)

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true"
  }
  return "No, that was false"
}
trueOrFalse(true);
console.log(trueOrFalse(false));
