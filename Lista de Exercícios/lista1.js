//função declarativa
function parImpar (n1){
    let resto=n1%2;
    if ( resto==0 )
{
     return `O número ${n1} é PAR!`;
}   
else{
    return `O número ${n1} é ÍMPAR!`;
}
}
console.log(parImpar(144));

//função expressiva

let resultado = function(n1){
 if (n1%2 == 0){
     return `O número ${n1} é PAR!`
 }
 else {
     return `O número ${n1} é ÍMPAR!`
 }
}
console.log(resultado(888))
console.log(resultado(5555))
console.log(resultado(547))
console.log(resultado(778))

//jeito do drapala
let verificaParImpar = function(num){
    if (num % 2 == 0){
        return "É par";
    }
    else{
        return "È impar!"
    }
}

console.log(verificaParImpar(21));

//if ternario
let resultado = num % 2 === 0 ? "O número é par" : "O número é Ímpar";