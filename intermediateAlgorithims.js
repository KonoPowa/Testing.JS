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










//Intermediate Algorithm Scripting: Seek and Destroy
function destroyer(arr) {
  let argArr = []
  for(let i = 1; i < arguments.length; i++){
    argArr.push(arguments[i])
  }
  let newerArr = arr.filter(function(current){
    return argArr.indexOf(current) < 0;
  })
  return newerArr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));









//Intermediate Algorithm Scripting: Wherefore art thou***************************
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let prop = Object.keys(source)
  for(let i = 0; i < collection.length; i++){
    if (collection[i].hasOwnProperty(prop[0]) && collection[i][prop[0]] === source[prop[0]] && collection[i][prop[1]] === source[prop[1]]){
      arr.push(collection[i])
    }
  }
  return arr
  // Only change code above this line
}



console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))














//Intermediate Algorithm Scripting: Spinal Tap Case********************
function spinalCase(str) {
  str = str.split(/(?=[A-Z])/).join("-").split(/[\s_]/).join("-").replace(/--/g,"-").toLowerCase()
  return str;
}


console.log(spinalCase("This Is Spinal Tap") )












//Intermediate Algorithm Scripting: Pig Latin*************************
function translatePigLatin(str) {
  let vowelRegex = /^[aeiou]/
  let consonantRegex = /[bcdfghjklmnpqrstvwxyz]+/
  if (vowelRegex.test(str) === true){
    return str + "way"
  }else if (consonantRegex.test(str)){
    let beginning = str.match(consonantRegex)
    let slice = str.slice(beginning[0].length,)
    return slice + beginning[0] + "ay"
  }
  vowelRegex.test(str)
  console.log(vowelRegex.test(str))
  return str;
}

console.log(translatePigLatin("glove"));












//Intermediate Algorithm Scripting: Search and Replace***********************
function myReplace(str, before, after) {
  let beforeR = /[A-Z]/
  let afterR = /[a-z]/
  if (beforeR.test(before) == true && afterR.test(after) == true){
    after = after.slice(0,1).toUpperCase() + after.slice(1,)
    str = str.replace(before, after)
    return str
  }else{
    return str.replace(before, after)
  }
  return str;
}


console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))












//Intermediate Algorithm Scripting: DNA Pairing************************
function pairElement(str) {
  let arr = []
  for (let i = 0; i < str.length; i++){
    if (str[i] === "G"){
      arr.push(["G","C"])
    }else if(str[i] === "C"){
      arr.push(["C", "G"])
    }else if(str[i] === "A"){
      arr.push(["A", "T"])
  }else if(str[i] === "T"){
      arr.push(["T", "A"])

}
  }
console.log(arr)
  return arr;
}
console.log(pairElement("GCG"));

//ALTERNATIVE SOLUTION^^^^^^^^^^^^^^^^^^^^^^

function pairElement(str) {
  var pairs = {
    "A": ["A", "T"],
    "T": ["T", "A"],
    "C": ["C", "G"],
    "G": ["G", "C"]
  };
  
  return str.split("").map(function(elem) {
    return pairs[elem];
  });
}












//Intermediate Algorithm Scripting: Missing letters******************************
function fearNotLetter(str) {
  console.log(str)
  for(let i = 0; i < str.length; i++){
    if (str.charCodeAt(i) === str.charCodeAt(i + 1) - 2){
      let charCode = str.charCodeAt(i + 1)
      charCode = parseInt(charCode, 10)
      return String.fromCharCode(charCode - 1)
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));












//Intermediate Algorithm Scripting: Sorted Union*****************************
function uniteUnique(arr) {
  var newArr = []
  for(let i = 0; i < arguments.length; i++){
    let push = arguments[i].filter(function(current){
    return newArr.indexOf(current) < 0;
      })
    newArr = newArr.concat(push)
    }
  console.log(newArr)
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
