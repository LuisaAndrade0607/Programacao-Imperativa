/*4) Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.*/

let animais = ['Abelha', 'Tubarão', 'Cobra', 'Macaco', 'Ouriço'];//array principal

let animalMensg = animais.forEach((animal)=> console.log(animal+" : "+"É UM ANIMAL!")); //for.Each invoca a função através do callback


