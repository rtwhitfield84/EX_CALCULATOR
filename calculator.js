/*SET INPUTS*/
var inputOne;
var inputTwo;

/*GRAB ELEMENTS*/
var addition = document.getElementById("add");
var subtraction = document.getElementById("subtract");
var multiplier = document.getElementById("multiply");
var divider = document.getElementById("divide");

/*EVENT LISTENER*/

document.getElementById("clickParent").addEventListener("click", function (event) {
  if (event.target === multiplier) {
    calculator(inputOne, inputTwo, multiply);
  } else if (event.target === divider) {
    calculator(inputOne, inputTwo, divide);
  } else if (event.target === addition) {
    calculator(inputOne, inputTwo, add);
  } else {
    calculator(inputOne, inputTwo, divide);
  }
});

/*FUNCTIONS*/

var calculator = function (inputOne, inputTwo, whichOne) {
       return whichOne(inputOne,inputTwo);    
};
 
 var multiply = function (a,b) {
  inputOne = parseInt(document.getElementById("firstInput").value);
  inputTwo = parseInt(document.getElementById("secondInput").value);
  document.getElementById("result").innerHTML = "The result is " + (inputOne * inputTwo);
  return inputOne * inputTwo;
};



 var add = function (a,b) {
  inputOne = parseInt(document.getElementById("firstInput").value);
  inputTwo = parseInt(document.getElementById("secondInput").value);
  document.getElementById("result").innerHTML = "The result is " + (inputOne + inputTwo);
  return inputOne + inputTwo;
};


var subtract = function (a,b) {
 inputOne = parseInt(document.getElementById("firstInput").value);
  inputTwo = parseInt(document.getElementById("secondInput").value);
  document.getElementById("result").innerHTML = "The result is " + (inputOne - inputTwo);
  return inputOne - inputTwo;
};


 var divide = function (a,b) {
  inputOne = parseInt(document.getElementById("firstInput").value);
  inputTwo = parseInt(document.getElementById("secondInput").value);
  document.getElementById("result").innerHTML = "The result is " + (inputOne / inputTwo);
  return inputOne / inputTwo;
};
















