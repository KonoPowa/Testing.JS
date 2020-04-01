//TEST METHOD


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line



let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);



let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);



let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);



//Regular Expressions: Extract Matches******************************
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/
let result = extractStr.match(codingRegex);
console.log(result)





//Regular Expressions: Find More Than the First Match**********
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line



//Regular Expressions: Match Anything with Wildcard Period**
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);



//Regular Expressions: Match Single Character with Multiple Possibilities*******
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result)




//Regular Expressions: Match Letters of the Alphabet*********
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line



let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line



let quoteSample = "3 blind mice.";
let myRegex = /[^1-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result)



//Regular Expressions: Match Characters that Occur One or More Times******************
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);





//Regular Expressions: Match Characters that Occur Zero or More Times******************
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);





//Regular Expressions: Find Characters with Lazy Matching***************
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h?1>/; // Change this line
let result = text.match(myRegex);
console.log(result)




//Regular Expressions: Find One or More Criminals in a Hunt CHALLENGE*******************
let reCriminals = /C+/g; // Change this line




//Regular Expressions: Match Beginning String Patterns********************
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);



//Regular Expressions: Match Ending String Patterns*************************
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);


//Regular Expressions: Match All Letters and Numbers*******************
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;



//Regular Expressions: Match Everything But Letters and Numbers************************
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;


//Regular Expressions: Match All Numbers**************************
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;



//Regular Expressions: Match All Non-Numbers*************************
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;



//Regular Expressions: Restrict Possible Usernames CHALLENGE*********************************CHALLENGE
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);


//Regular Expressions: Match Whitespace*****************************************************
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);



//Regular Expressions: Match Non-Whitespace Characters**************************
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);



//Regular Expressions: Specify Upper and Lower Number of Matches**************************
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
console.log(ohStr.match(ohRegex))



//Regular Expressions: Specify Only the Lower Number of Matches*************************
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);



//Regular Expressions: Specify Exact Number of Matches***************************
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
