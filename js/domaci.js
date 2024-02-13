let broj = prompt("Unesi broj")
    if(broj%3 == 0 && broj%5 == 0){
        console.log("fizzbuzz")
    }
    else if(broj%3 == 0){
        console.log("fizz")
    }
    else if(broj%5 == 0){
        console.log("buzz")
    }
else{
    console.log("nisi dobro uradio zadatak")
}