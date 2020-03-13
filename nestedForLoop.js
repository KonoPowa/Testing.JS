function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
  
    product *= arr[i][j];
  }
  // Only change code above this line
}
return product;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));




// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do{
  myArray.push(i);
  i++;
} while (i < 5)
	



function sum(arr, n) {
  // Only change code below this line
  if (n <= 0){
    return 0;
  } else{
    return sum(arr, n-1) + arr[n-1];
  }
  // Only change code above this line
}
console.log(sum([2,3,4,5],3));
