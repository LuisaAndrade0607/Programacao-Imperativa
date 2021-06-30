/*Crie uma função mostrarNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min().
Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.*/

const mostrarNumero = function (...spread) {
    return Math.min(...spread)
};
console.log(mostrarNumero(5,6,7,89,0,2,3,655,5322,2));

const mostrarNumeroMax = function (...maximo) { // TESTE: retornando o valor máximo
    return Math.max(...maximo)
};
console.log(mostrarNumeroMax(1,4,5,9,7,57,3,5,2,46,333,2222,8888,1234567));


const mostrarNumero2 = (...arrow) => {  // TESTE: utilizando arrow function
    return Math.min(...arrow)
};

console.log(mostrarNumero2(1,2,4,5,6,7,8,9,13,414,466,788));