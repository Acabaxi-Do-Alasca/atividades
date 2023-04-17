let minhaLista = [2, 4, 6];
let resultado = minhaLista.every(function(elemento) {
return elemento % 2 === 0;
});
if (resultado == true){
    console.log("so par");
}
else {
    console.log("não e so par");
}
