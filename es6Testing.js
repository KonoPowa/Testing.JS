let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();



function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}






function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");





function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");








const magic = () => new Date();



// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line







const sum = (...args) => {

  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 6







//DESTRUCTURING********************************

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const{today,tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line






const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line





const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST

// Only change code above this line







let  a = 8, b = 6;
// Only change code below this line
    [a,b] = [b,a];
	
	
	
	
	
	const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [,,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);





const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
console.log(half(stats));
// Only change code above this line







//TEMPLATE LITERAL *****************************




const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  var resultDisplayArray = [];
  for(var i = 0; i < 3; i++ ){
  const array = `<li class="text-warning">${result.failure[i]}</li>`;
  resultDisplayArray.push(array);
  }
  // Only change code above this line
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(makeList(result.failure))





//LITERAL DECLARATION******************************************



const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};



//ES6: Write Concise Declarative Functions with ES6******



// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);







//ES6: Use class Syntax to Define a Constructor Function****************************


// Only change code below this line
class Vegetable{
    constructor(name){
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'










//ES6: Use getters and setters to Control Access to an Object***************************************


// Only change code below this line
class Thermostat{
    constructor(temp){
        this._temp = temp;
    }
    //getter
    get temperature(){
        return 5/9 * (this._temp - 32)
    }
    //setter
    set temperature(celsius){
        this._temp = celsius * 9.0 / 5 + 32
        
    }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos.temperature)









//MODULE SCRIPT IN HTML **********************************************************************



<html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src = "index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>






const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};





  import {uppercaseString, lowercaseString} from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");







import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");








export default function subtract(x, y) {
  return x - y;
}







import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);








//CREATE A JAVASCRIPT PROMISE*******************************************


const makeServerRequest = new Promise((resolve, reject) => {

});







