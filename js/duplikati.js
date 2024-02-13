const arr = [121,122,12,22,112,123,23,112,233,1323,12,121];
const abc = {};
arr.forEach(el => {
    if (Object.hasOwn(abc, el)) {
        abc[el]++;
    }else {
        abc[el] = 1;
    }
});
console.log(abc);