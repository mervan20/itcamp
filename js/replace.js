let arr = [1,2,3,4,5,6,7,8,9,10]
let nes = [];
for (let i = 0; i < arr.length; i++) {
    nes.push(String(arr[i] * arr[i]));
    
}
console.log(nes);