let loadFunction = function() {
    "use strict";
  let submitButton = document.getElementById('submitButton');
  let inputCracker = document.getElementById('inputCracker');
  let output = document.getElementById('favCracker');
  let getInput = function() {
    let inputText = document.getElementById('inputCracker').value;
    console.log(inputText);
    favCracker.innerHTML = inputText + " is our favorite cracker too!";
    document.getElementById('inputCracker').value = "";
  }
  submitButton.addEventListener("click", getInput);

};
window.onload = loadFunction;
