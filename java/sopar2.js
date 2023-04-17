var minhalista = [2,3,6,8,10]
var par = false

for (var i = 0; i < minhalista.length; i++){
    if (minhalista[i] % 2 == 0){
        par = true
    }
    else{
        par = false
        break
    }
}

if (par == true){
    console.log("so par");
}else{
    console.log("tem impar");
}