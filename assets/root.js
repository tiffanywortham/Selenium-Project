"use strict";

window.addEventListener('load', function () {
    getLoadingGif().setAttribute('hidden', '');
    let xhr = new XMLHttpRequest();
    let inputs = document.querySelectorAll('input');
    let data = Array.prototype.map.call(inputs, function(input) {
        console.log(input);
        let key = input.getAttribute('name');
        let value = input.value;
        return {
            key: key,
            value: value
        };
            
    });
    console.log(data);
    xhr.addEventListener('load', function () {
        let body = document.querySelector('body');
        body.innerHTML += this.responseText;
        console.log(this.responseXML);
    });
        
    xhr.open("POST", `/data`);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.send(JSON.stringify(data));
    
    console.log('I should be finished now');
});

function getLoadingGif() {
    return document.getElementById('loader');
}
