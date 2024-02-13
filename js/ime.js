const test = "ime-prezime";
let ime = ""
let prezime = ""
let pomocnaVar = false
for (let i = 0; i < test.length; i++)  {
    if(test[i] === '-'){
        pomocnaVar = true;
        continue;
    } 
    if(pomocnaVar == false) {
        ime+=test[i]
    }
    if(pomocnaVar === true){
        prezime+= test[i]
    }
}
console.log(test)
console.log(ime,prezime)