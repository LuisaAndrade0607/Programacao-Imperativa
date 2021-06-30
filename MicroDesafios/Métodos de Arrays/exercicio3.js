/*Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.*/

let numeros = [10, 20, 30 , 40, 50];
let numString = numeros.reduce((acumulador, numeros) => acumulador + '-' + numeros);//acumulador acumula a soma dos índices
console.log(numString);

/*TESTES*/

let numSomar = numeros.reduce((acumulador2, numeros2) => acumulador2 + numeros2);//teste de soma com reduce
console.log(numSomar);

let numSubtrair = numeros.reduce((acumulador3, numeros3) => acumulador3 - numeros3);//teste de subtração com o reduce
console.log(numSubtrair);

let nomes = ['Maria', 'João', 'Pedro', 'Lais'];

let nomesJuntos = nomes.reduce((juncao, nome) => juncao + nome);//teste com strigs
console.log(nomesJuntos);