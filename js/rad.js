let broj = prompt("Unesi broj")
if(isNaN (broj)){
    if(broj == 0){
        console.log("broj je neutralan ili jendnak nuli")
    }
    console.log('$(broj)}nije broj')
}
else if(broj%2==0){
    console.log("broj je paran")
}
else{
    console.log("broj je neparan")
}