let container = document.getElementById("container");

let ask = parseInt(prompt("inserisci un numero"));
// let list = [];
// let numRandom;

// for (i = 0; i < ask; i++) {
//     numRandom = Math.floor(Math.random() * 100) + 1;
//     for (k = 0; k < 10; k++) {
//         list.push(numRandom);
//         container.innerHTML += `${list[k]}`
//     }
// }

// for (let k = 0; k < 10; k++) {
    
// }
let newArray;
let i = 0;
while (i < ask) {

    newArray = [];
    for (k = 0; k < 10; k++) {
        newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    i++;
    console.log(newArray);
    container.innerHTML += `<div>${newArray}</div>`;
}


