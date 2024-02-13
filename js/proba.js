let kemal = prompt("Koliko ce kemal da ima para....");
const staZelisKupiti = prompt("Mozes kupiti 1.cokolada , 2.cigare, 3.sok,4.ako nemas mozes da uzmes iz BANKE i da se zaduzis").toLowerCase();
console.log(typeof kemal, "gore typeof od kemal")

const sok = 60;
const cokolada = 40;
const cigare = 480;
let banka = 5000;

switch(staZelisKupiti){
    case "cokolada":
        if(kemal >= cokolada){
            kemal = kemal - cokolada;
            console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
            console.log(typeof kemal,"typeof od kemal")
        }
        else if (kemal >= cokolada)  {
            kemal = banka - 60;
            console.log(`Kupio si ${staZelisKupiti}, duzan si ${staZelisKupiti}`)
            
        }
        else{
            console.log("Nemas dovoljno para....")
        }
        break;
     case "cigare":
        if(kemal >= cigare){
            kemal = kemal - cigare;
            console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
        } 
        else if (kemal >= cigare) {
            kemal = banka - 60;
            console.log(`Kupio si ${staZelisKupiti}, duzan si ${staZelisKupiti}`)
            
        }
        else{
            console.log("Nemas dovoljno para....")
            }
        break;
    case "sok":
        if(kemal >= sok){
            kemal = kemal - sok;
            console.log(`Kupio si ${staZelisKupiti}, i ostalo ti je ${kemal}`)
        }
        else if(kemal >= sok){
            kemal = banka - 60;
            console.log(`Kupio si ${staZelisKupiti}, duzan si ${staZelisKupiti}`)
            
        }
        else{
            console.log("Nemas dovoljno para....")
        break;}
    default:
        console.log("Duzan si dosta para")

    }