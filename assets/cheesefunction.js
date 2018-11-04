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
        window.location.replace("https://www.google.com/search?q=grapes&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi629Ly57veAhWI6oMKHdWRDqUQ_AUIEygB&biw=1678&bih=867&dpr=2");
    };
    changeNoButton.addEventListener("click", changeNo);

};
window.onload = loadFunction;
