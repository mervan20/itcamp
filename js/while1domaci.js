var parni = [2,4,6,8,10,12];
var neparni = [1,3,5,7,9,11];
var zajedno = [];
let brPar = 0;
let brNepar = (neparni.length) - 1;
while (brPar < (neparni.length)){
    zajedno.push(parni[brPar] + neparni[brNepar])
    brPar = ++brPar
    brNepar = --brNepar
}
console.log(zajedno);