let container = document.getElementById("container");
let ask;
let i = 0;
let sum = 0;

while (i < 5) {
    ask = parseInt(prompt("inserisci un numero"));
    sum += ask;
    i++
}

container.innerHTML = `la somma dei numeri inseriti è: ${sum}`