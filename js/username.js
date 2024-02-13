let username = ""
const ime = "mervan"
while(username !== "mervan"){
    username = prompt("Unesite vase korisnicko ime")
    if(username !== ime){
        alert("Nisi uneo trazeno korisnicko ime")
    }
}
let pasw = ""
const sifra = "mervan123";
while(pasw !== "mervan123"){
    pasw = prompt("Unesite sifru")
    if(pasw !== sifra){
        alert("Nisi uneo tacnu sifru")
    }
}
alert("Uspesno ste se ulogovali")
window.location.replace("file:///C:/Users/PC/Desktop/it%20camp/hmtl%20i%20css/portfolio.html")