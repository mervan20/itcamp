const arr2 = [[1,2,3],[1,2,3],[1,2,3]];
let newArr = [];
for (let i = 0; i <=arr2.length - 1; i++) {
    for (let j=0; j <=arr2[i].length - 1; j++){
        newArr.push(arr2[i][j])
    }
    
}
console.log(newArr)