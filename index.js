
let button = document.getElementById('button');
console.log(button);
button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Button clicked");
    let userName = document.getElementById('userName').value;
        console.log(`Username: ${userName}`);
    let password = document.getElementById('password').value;
        console.log(`Password: ${password}`);

    showInfo(userName, password);
    }
);

let bodyClickHandler = function() {
    body.style.backgroundColor = "lightblue";
    console.log("Body clicked");
    removeEventListner();
};

let body = document.querySelector("body");
body.addEventListener('click', bodyClickHandler);

function removeEventListner() {
    body.removeEventListener('click', bodyClickHandler);
}

function showInfo( userName, password) {
    let results = document.getElementById('results');
    let paragraph = document.createElement('p');    

    paragraph.innerHTML = `Username: ${userName} Password: ${password}`;
    results.appendChild(paragraph);
}


