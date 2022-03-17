let container = document.getElementById("container");
let list = ["Gino", "Pino", "Tizio", "Caio", "Sempronio", "Aldo", "Giovanni", "Giacomo"];
let sentinel = false;

let ask = prompt("Qual è il tuo nome?");
let i = 0;
while (sentinel = false || i > list.length) {
    i++;
    if (ask == list[i]) {
        sentinel = true;
        container.innerHTML = `puoi entrare ${ask}`;
    } else {
        container.innerHTML = `non sei in lista`;
    }
}