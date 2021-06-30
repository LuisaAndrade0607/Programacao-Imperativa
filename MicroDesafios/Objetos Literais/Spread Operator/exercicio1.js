// Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome.
// Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array
// numerosPrimos adicionados através do spread, juntos com outros números.

const numerosPrimos = [2, 3, 5, 7, 11, 13, 17]
// utilizando o const como recomendado
const numeros = [1, 4, 8, 12, ...numerosPrimos]

console.log(numeros);
//mostra os dois arrays 

console.log(numerosPrimos);
//mostra somente o primeiro array

