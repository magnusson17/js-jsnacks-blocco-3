let container = document.getElementById("container");
let list = ["Gino", "Pino", "Tizio", "Caio", "Sempronio", "Aldo", "Giovanni", "Giacomo"];

let ask = prompt("Qual è il tuo nome?");
let sentinel = false;
let i = 0;

/*es 1*/
while (i < list.length) {
    if (ask == list[i]) {
        i = list.length + 1;
        container.innerHTML = `puoi entrare ${ask}!!!!!!!`;
    } else {
        i++;
    }
}
    
if (i != list.length + 1) {
    container.innerHTML = `non sei in lista`;
}

 /*usa for: FUNZIONA MA NON FERMA IL CICLO*/
// for (i = 0; i < list.length; i++) {
//     if (ask == list[i]) {
//         sentinel = true;
//     }
// }

// if (sentinel = true) {
//     container.innerHTML = `puoi entrare ${ask}`;
// } else {
//     container.innerHTML = `non puoi entrare`;
// }

/*es 2: NON FUNZIONA*/
// do {
//     if (ask == list[i]) {
//         sentinel = true;
//         container.innerHTML = `puoi entrare ${ask}`;
//     } else {
//         i++
//     }
// } while (i < list.length);

