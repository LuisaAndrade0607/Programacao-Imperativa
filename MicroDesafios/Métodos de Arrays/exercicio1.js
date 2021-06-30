/*1)Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.*/


let numPares = [2, 4, 6, 8, 10]

let numImpares = numPares.map((i1)=>i1-1);//A função no método map serve para validação
console.log(numImpares);//imprime um outro array baseado no primeiro 

let numImpares2 = numImpares.map((i2)=>i2*5);//teste: testando o método em um array criado através do map
console.log(numImpares2);