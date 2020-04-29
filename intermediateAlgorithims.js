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









//Intermediate Algorithm Scripting: Convert HTML Entities********************************
function convertHTML(str) {
  str = str.replace("&", "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&apos;")
  console.log(str)
  return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));











//Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers*******************
function sumFibs(num) {
  let sequence = 1;
  let sequenceArr = [1,1];
  for (let i = 1; i < num; i++){
    sequence = sequence + sequenceArr[i - 1];
    sequenceArr.push(sequence)
  }
  //console.log(sequenceArr)
 let answer = sequenceArr.filter(current => current % 2 !== 0 && current <= num).reduce(function(total,current){
    return current + total
  });
 
  return answer
}
console.log(sumFibs(1));














//Intermediate Algorithm Scripting: Sum All Primes**************************
function sumPrimes(num) {
  let arr = []
  for (let i = 0; i < num + 1; i++){
    arr.push(i)
  }
  //COPIED**
   var sieve = [], i, j, primes = [];
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
	//COPIED^^
    console.log(primes)
    let answer = primes.reduce(function(total, current){
      return total + current
    })
    return answer;


    

  console.log(arr)
  return num;
}
console.log()
sumPrimes(10);














//Intermediate Algorithm Scripting: Smallest Common Multiple*****************************
function smallestCommons(arr) {
  let newArr = [];
  let range = newArr.sort()
  for (let i = Math.min.apply(Math,arr); i < Math.max.apply(Math, arr) + 1; i++){
    newArr.push(i)
  }
  let sortDesc = function(a,b){
    return b - a
  }
  var x = true;
  var LCM = newArr[0];
  while(x){
    LCM++
    for (var j = newArr[0]; j <= newArr[newArr.length - 1]; j++){
      if (LCM % j !== 0){
        break;
      }else if( j == newArr[newArr.length - 1]){
        x = false;
        break;
      }
    }
  }
  return LCM ;
}

console.log(smallestCommons([2, 10]))











//Intermediate Algorithm Scripting: Drop it******************************
function dropElements(arr, func) {
    let newArr = arr.slice(0,)
    let newerArr = arr.slice(0,)
    for (let i = 0; i < newerArr.length; i++){
      if (func(newerArr[i]) === false){
        newArr.shift()
      }else{
        break;
      }
    }
    return newArr
}
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))











//Intermediate Algorithm Scripting: Steamroller***********************************
function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}
//COPIED^^^^^^^^^^^^^^^^^^^^^^^^^^^















//Intermediate Algorithm Scripting: Binary Agents*****************************
function binaryAgent(str) {
  let arrStr = str.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("")
  console.log(arrStr)
  console.log(String.fromCharCode(arrStr[2]))
  return arrStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");




















//Intermediate Algorithm Scripting: Everything Be True**************************************
function truthCheck(collection, pre) {
  let answer = "anything"
  for (let i = 0; i < collection.length; i++){
    if (collection[i].hasOwnProperty(pre)){
      if (Boolean(collection[i][pre]) == false ){
        answer = false;
        break;
      }
      else{
        answer = true;
      }
    }
  
  if (!collection[i].hasOwnProperty(pre)){
    answer = false;
    break;
  }

    if (answer === false){
      break;
    }
  }
  console.log(collection[0][pre])
  console.log()
  return answer;
}

console.log(truthCheck([{"single": "yes"}], "single"));
//ALTERNATE SOLUTION^^^^^^^^^^^^^^^^^^^^^^
function truthCheck(collection, pre) {
for(i=0;i<collection.length;i++){
if(!collection[i][pre])
return false;
}
return true;
}



















//Intermediate Algorithm Scripting: Arguments Optional********************************
function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2, 3);









