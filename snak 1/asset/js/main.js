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
        list.push(ask);
    }
}
container.innerHTML = `<div>gli elementi del'array sono: ${list}</div><div>la loro somma è: ${sum}</div>`;