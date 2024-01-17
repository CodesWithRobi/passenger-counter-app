// This is a comment
let num = 0;
const count = document.getElementById("count");
const log = document.getElementById("log");

function increment() {
    num++;
    count.innerText = num;
}

function save() {
    log.innerText += `${num} + `;
    num = 0;
}

