const zadatakZadaca = [12,32,32,321,213,3213,1313131,313131]
const bucanResenje = zadatakZadaca.map((el,i,arr) => {
 if(i == 0){
    return el;
 }

else{
    if(el % 2 == 0){
        return el-arr[i-1]
    }
    else{
        return el
    }
}
})
console.log(bucanResenje)