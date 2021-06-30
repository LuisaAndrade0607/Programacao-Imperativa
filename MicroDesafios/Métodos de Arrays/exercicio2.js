//2) Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['Maria', 'Maria', 'Joana', 'Pedro'];//Array com os nomes

let selecionarNomes = nomes.filter((indice) => indice=='Maria');//metodo filter para filtrar apenas o nome Maria
console.log(selecionarNomes);//Imprime o array de acordo com a validação 

let selecionarNomes2 = nomes.filter((indice2) => indice2 != 'Maria');//teste: teste para saber os indices diferentes de Maria
console.log(selecionarNomes2);
