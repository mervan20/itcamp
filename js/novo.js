const arr1 = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9,9,9]
const arr2 = [2,2,3,1,5,6,7,21,5,76,8,9]
const arr4 = [];
for (let i = 0; i < arr1.lenght; i++){
    if (!arr4.includes(arr1[i])) {
        arr4.push(arr1[i]);
    }
}
for (let i = 0; i < arr2.length; i++) {
    if (!arr4.includes(arr2[i])) {
        arr4.push(arr2[i]);
    }
}
console.log(arr4);