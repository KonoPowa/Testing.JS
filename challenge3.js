function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
    return [];
}else {
  var rangeArray = rangeOfNumbers(startNum + 1, endNum);
  rangeArray.unshift(startNum);
  return rangeArray;
  }
}

console.log(rangeOfNumbers(1,5))