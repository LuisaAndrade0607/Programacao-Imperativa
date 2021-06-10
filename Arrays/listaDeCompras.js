let compras = ["Macarrão", "Arroz", "Feijão", "Batata"];
console.log(compras);

console.log(compras.join("-"));
console.log( " Join transforma a array em uma string");

compras.pop();
console.log(compras);

console.log(" Pop retira o ultimo elemento da array");
compras.shift("Macarrão");

console.log(compras);
console.log("Shift retira um elemento específico da array");

compras.unshift("Cenoura");
console.log(compras);

console.log(" Unshift adiciona um elemento específico na array");
