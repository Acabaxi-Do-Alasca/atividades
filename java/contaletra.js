let minhaLista = ["ala", "boi", "oi", "cadela", "kkk"];
let novaLista = minhaLista.filter(function(elemento) {
 if (elemento.length == 3){
    return true
    }
});
console.log(novaLista);