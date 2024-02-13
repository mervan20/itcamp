function mojCustomMap(arr,callback) {
    arrback = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        arrback.push(callback(el, i, arr));
    }
    return arrback;
}
arr = [1, 2, 3, 4, 5, 6, 7];
console.log(mojCustomMap(arr, (el) => el % 3));