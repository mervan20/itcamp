const osoba = {
    username:"",
    email:"",
    sifra:""
};
while (!osoba.username) {
    osoba.username = prompt("Unesite vase ime")
}
while (!osoba.email) {
    osoba.email = prompt("Unesite vase prezime")
}
while (!osoba.sifra) {
    osoba.sifra = prompt("Unesite vase godine")   
}
console.log(osoba)