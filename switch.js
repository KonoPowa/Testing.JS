function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);





function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);






function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);








function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99: 
    answer = "Missed me by this much!";
    break;
  case 7: 
    answer = "Ate Nine";
    break;
  }
  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
