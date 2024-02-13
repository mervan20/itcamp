const arriest = [1,2,3,4,5,6,7,8,9,10,11,12]
let parni = [] 
let neparni = []
let counter = arriest.length - 1;
while (counter >=0) {
    if (arriest[counter] % 2 == 0){
        parni.push(arriest[counter])
    }
    else if (arriest[counter] % 2 == 1){
        neparni.push(arriest[counter])
    }
    counter--;
}
console.log("Ovo su parni",parni,"Ovo su neparni",neparni)