let arr = [1,2,3,4,5,6];
let res = 0;
let counter = 0;
while(counter < arr.length) {
    if(!(arr[counter] %2)) {
    res += arr[counter];
    }
    counter++;
}
console.log(res);