var numbers = [1,2,3,4,5,6];
let broj=0
let parni=0
let neparni=0
let ostatak=0
for (let i=0; i<2; i++)  {
    numbers.push(...numbers);
}
let duzina=(numbers.length)
while (broj < duzina){
    ostatak = numbers[broj] % 2
    if (ostatak == 0){
        parni = parni + numbers[broj]
        broj = broj + 1
    }
    else{
        neparni=neparni + numbers[broj]
        broj = broj + 1
    }
}
console.log(neparni)
console.log(parni)