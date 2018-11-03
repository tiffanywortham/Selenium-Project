let loadFunction = function() {
    "use strict";
    let changeThisDiv = document.querySelector('#change');
    function randomColors() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    let changeYesButton = document.querySelector('.yes-button');
    let changeYes = function() {
        changeThisDiv.innerHTML = "Heck yeah they are";
    };
    changeYesButton.addEventListener("click", changeYes);


    let changeNoButton = document.querySelector('.no-button');
    let changeNo = function() {
        window.location.replace("http://heavensgate.com");
    };
    changeNoButton.addEventListener("click", changeNo);

};
window.onload = loadFunction;
