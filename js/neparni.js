const svi = [1,2,3421,321321,321321,12,21312312]
const samoNeparni = [];
for (let i = 0; i < svi.length; i++) {
    if(svi[i]%2 !== 0) samoNeparni.push(svi[i])
    
}
console.log(samoNeparni);