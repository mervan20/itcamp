let broj1  = prompt("Dodeli vrednost broju 1");
let broj2= prompt("Dodeli vrednost broju 2");

let operacija = prompt("Mozes odabrati 1.+ , 2.-, 3./,4.*");
let rezultat;

switch(operacija){
    case "+":
        rezultat = broj1 + broj2
      console.log(`Iznos je ${rezultat}`)
        
        break;
    case "-":
            rezultat = broj1 - broj2
            console.log(`Iznos je ${rezultat}`)
         
        break;
    case "/":
            rezultat = broj1 / broj2;
            console.log(`Iznos je ${rezultat}`)
        
        break;
    case "*": 
            rezultat = broj1 * broj2;
            console.log(`Iznos je ${rezultat}`)
            break;
        
        default:
        console.log("Uneo si nepotrebno")
}
