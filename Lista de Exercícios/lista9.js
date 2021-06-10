// 9)	Com base em dois valores, imprimir uma das três mensagens a seguir: 
// ‘Números iguais’, caso os números sejam iguais;
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let verificacao = function (n1,n2){
    if (n1===n2){
        return `Números iguais! ${n1} e ${n2} .`
    }
    else if (n1>n2) {
        return `Primeiro é maior! ${n1} e ${n2} .`
    }
    else (n1<n2) 
    {
        return `Segundo é maior! ${n1} e ${n2} .`
    }
}

console.log(verificacao(2,4))