//Intermediate Algorithm Scripting: Sum All Numbers in a Range***************************************
function sumAll(arr) {
  let newArr = []
  for (let i = Math.min(...arr); i < Math.max(...arr) + 1; i++){
    newArr.push(i)

  }
  let reducer = (acc, currentValue) => acc + currentValue;
  newArr.reduce(reducer)
  console.log(newArr.reduce(reducer))
  return newArr.reduce(reducer);

}

sumAll([1, 4]); 









//Intermediate Algorithm Scripting: Diff Two Arrays****************
function diffArray(arr1, arr2) {
  var newArr = [];
  let newerArr = arr1.filter(function(current){
    return arr2.indexOf(current) < 0;
  }).concat(arr2.filter(function(current){
    return arr1.indexOf(current) < 0;
  }))
  newerArr.sort()
  
  
  console.log(newerArr)
  console.log(newArr)
  return newerArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
