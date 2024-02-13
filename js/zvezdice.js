let k = prompt("Unesite broj");
let noviNiz = []
for(let i = 1; i <= k; i++) {
    let nesto = '';
    for (let j = 1; j <= i; j++) {
        nesto += '*';
    }
    console.log(nesto)
}
console.log(noviNiz.join("\n"));