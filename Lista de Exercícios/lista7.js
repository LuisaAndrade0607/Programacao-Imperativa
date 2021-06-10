//7)	Faça um programa que considere: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e imprimir a quantidade média (quantidade média = (quantidade máxima + quantidade mínima) /2). Se a quantidade em estoque for maior ou igual a quantidade média imprimir a mensagem 'Não efetuar compra', senão imprimir a mensagem 'Efetuar compra'.

function total (qtdAtual,qtdMax,qtdMin){
let media = (qtdMin + qtdMax)/2 
console.log(media)
if (qtdAtual >= media){
    return `Não efetuar a compra! Quantidade média: ${media}`
}
else {
    return `Efetuar a compra! Quantidade média: ${media}`
}
}

console.log(total(100,100,1))