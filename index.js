// This is a comment
let num = 0;
const count = document.getElementById("count");
const log = document.getElementById("log");
const total = document.getElementById("total")

function increment() {
    num++;
    count.innerText = num;
}

function save() {
    log.innerText += `${num} + `;
    num = 0;
    add()
}

function add() {
    total.innerText = `Total : ${eval(log.innerText.slice(0 , -2))}`;
}

