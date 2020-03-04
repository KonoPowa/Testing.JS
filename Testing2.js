function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");
console.log(compareEquality(10, "10");

function testLogicalAnd(val) {
	if (val <= 50 && val >= 25) {
      return "Yes";
    }
 return "No";
}
console.log(testLogicalAnd(10));

function testLogicalOr(val) {
	if (val < 10 || val > 20) {
		return "Outside";
	  }
	return "Inside";
	}
console.log(testLogicalOr(15));


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1){
    return "Hole-in-one!"
  } else if (strokes <= par - 2){
    return "Eagle"
  }else if(strokes == par - 1){
    return "Birdie"
  }else if (strokes == par){
    return "Par";
  }else if (strokes == par + 1){
    return "Bogey"
  }else if (strokes == par + 2){
    return "Double Bogey"
  }else if (strokes >= par + 3){
    return "Go Home!"
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);
