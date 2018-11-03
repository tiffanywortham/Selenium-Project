let loadFunction = function() {
    "use strict";
    let changeThisDiv = document.querySelector('#change');

    let changeYesButton = document.querySelector('.yes-button');
    let changeYes = function() {
        changeThisDiv.innerHTML = "Heck yeah cheese n crackers for life";
    };
    changeYesButton.addEventListener("click", changeYes);

    let changeNoButton = document.querySelector('.no-button');
    let changeNo = function() {
        window.location.replace("http://heavensgate.com");
    };
    changeNoButton.addEventListener("click", changeNo);

};
window.onload = loadFunction;
