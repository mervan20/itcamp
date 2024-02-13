
const arr = [1,2,3,4,5,6,7]
const arr2 = [1,3,3,5,6,7,8]
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr2[i]){
        newArr.push(arr[i])
    }
    
}
console.log(newArr)