let broj1 = 0;
let broj2 = 0;
let broj3 = 0;

for (let i= 0;  i<=100; i++) {
    if (i % 3 === 0 && i % 5 == 0){
        broj1++;
    }
    else if (i % 3 === 0){
        broj2++;
    }
    else if (i % 5 === 0){
        broj3++;
}

}
console.log(broj1,broj2,broj3)