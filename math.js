// global variables
var operators = ["+", "-", "*", "/"];
var number1, number2, operator;
var score = 0;

// start function
function start() {
  number1 = Math.floor(Math.random() * 50) + 1;
  number2 = Math.floor(Math.random() * 20) + 1;
  operator = operators[Math.floor(Math.random() * operators.length)];

  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;
  document.getElementById("operator").innerHTML = operator;
  document.getElementById("reset").style.visibility = "hidden";
  document.getElementById("score").innerHTML = score;
  reset();
}

// resetting the input and error message
function reset() {
  document.getElementById("answer").focus();
  document.getElementById("answer").value = "";
  // document.getElementById("result").innerHTML = "";
  return true;
}

// check answer
function checkAnswer() {
  var answer = document.getElementById("answer").value;
  document.getElementById("reset").style.visibility = "hidden";

  if (answer != "") {
    var message = "";
    var equation = eval(number1 + operator + number2);
    if (equation == answer) {
      score += 10;
      message = "<span class='green'>" + answer + " is correct!</span>";
    } else {
      document.getElementById("reset").style.visibility = "visible";
      if (isNaN(answer)) {
        message =
          "<span class='maroon'>Hey! " +
          answer +
          " is not a valid number!</span>";
      } else {
        score -= 10;
        message = "<span class='red'>" + answer + " is incorrect!</span>";
      }
    }
    // display answer
    document.getElementById("result").innerHTML = message;
    document.getElementById("score").innerHTML = score;
  }
  return true;
}

// check for answer when enter is pressed
document.getElementById("answer").addEventListener("keyup", function(e) {
  // 13 is for enter key
  if (e.which == 13 || e.keyCode == 13) {
    checkAnswer();
  }
  return false;
});
