//Basic Algorithm Scripting: Convert Celsius to Fahrenheit*************
function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9/5 + 32
  return fahrenheit;
}

convertToF(30);






//Basic Algorithm Scripting: Reverse a String*********************
function reverseString(str) {
  var result = "";
  let strArray = [];
  for (let i = 0; i < str.length; i++){
    strArray.push(str[i])
   
  }
  for (let j = strArray.length - 1; j > -1; j--){
    result += strArray[j]
  }
  return result;
}

reverseString("hello");
console.log(reverseString("Hello"))









//Basic Algorithm Scripting: Factorialize a Number*************************
function factorialize(num) {
  let newNum = 1
  for (let i = 1; i <= num; i++ ){
    newNum *= i
    
  }
  return newNum
  //return num;
}
console.log(factorialize(5))
factorialize(5);












//Basic Algorithm Scripting: Find the Longest Word in a String****************
function findLongestWordLength(str) {
  var strArr = str.split(" ")
  //console.log(strArr)
  var king = strArr[0].length;
  for (let i = 0; i < strArr.length; i++){
    if (strArr[i].length > king ){
      king = strArr[i].length
    }
  }
  console.log(king)
  return king;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");






//Basic Algorithm Scripting: Return Largest Numbers in Arrays*********************
function largestOfFour(arr) {
  let king = Number.NEGATIVE_INFINITY;
  let kingArr = []
    for (let i = 0; i < arr.length; i++){
      king = Number.NEGATIVE_INFINITY
      for (let j = 0; j < arr[i].length; j++){
        if (arr[i][j] > king){
          king = arr[i][j]
        }
      }
      kingArr.push(king)
    }
  return kingArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));









//Basic Algorithm Scripting: Confirm the Ending*******************
function confirmEnding(str, target) {
  let newStr = str.substring(str.length - target.length, str.length + target.length)
  if (newStr == target){
    return true
  }else{
    return false
  }
}

console.log(confirmEnding("Connor", "n"));







//Basic Algorithm Scripting: Repeat a String Repeat a String******************
function repeatStringNumTimes(str, num) {
  let newStr = ""
  let i = 0
  if (num > 0){
    while (i < num){
      newStr = newStr + str
      i++
    }
    return newStr
  }
  else{
    return ""
  }
}
console.log(repeatStringNumTimes("abc", 3))
repeatStringNumTimes("abc", 3);








//Basic Algorithm Scripting: Truncate a String********************
function truncateString(str, num) {
  let arr = []
  let newStr = ""
  if (str.length > num){
    for (let i = 0; i < num; i++){
      arr.push(str[i])
    }
    for (let i = 0; i < arr.length; i++){
      newStr = newStr + arr[i]
    }
    newStr += "..."
    return newStr;

  }else{
    return str
  }
  
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
truncateString("A-tisket a-tasket A green and yellow basket", 8);
//ALTERNATE^^
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}









//Basic Algorithm Scripting: Finders Keepers*********************
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++){
    num = arr[i]
    if(func(num) === true){
      return num
    }
  }
  console.log(num)
}
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
findElement([1, 2, 3, 4], num => num % 2 === 0);










//Basic Algorithm Scripting: Boo who***************
function booWho(bool) {
  if( typeof(bool) === 'boolean'){
  return true
  }
  else{
  return false;
  }
  
}
console.log(booWho([1,2,3]))
booWho([1,2,3]);
//ALTERNATE^^
function booWho(bool) {
  return typeof bool === "boolean";
}






//Basic Algorithm Scripting: Title Case a Sentence************
function titleCase(str) {
  var newStr = str.toLowerCase().split(" ");
  for (let i = 0; i < newStr.length; i++){
  newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1)
  }
  
  return newStr.join(" ");
}
console.log(titleCase("I'm a little tea pot"))
titleCase("I'm a little tea pot");








//Basic Algorithm Scripting: Slice and Splice**************
function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++){
    newArray.splice(n,0,arr1[i])
    n++
  }
  return newArray;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
frankenSplice([1, 2, 3], [4, 5, 6], 1);
