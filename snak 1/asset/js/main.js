let container = document.getElementById("container");
let list = [];
let sum = 0;
let ask;

while (sum < 50) {
    ask = parseInt(prompt("inserisci un numero"));
    if (isNaN(ask)) {
        alert("ERRORE");
    } else {
        sum += ask;
        if (sum < 50) {
            list.push(ask);
        }
    }
}
container.innerHTML = `<div>gli elementi del'array sono: ${list}</div><div>la somma di tutti i numeri inseriti è: ${sum}</div>`;