const andar = () => "O carro está andadando!"
//Declaro uma variável sem parâmetro com o que ela deve executar

const parar = () => "O carro está parado!"
//Declaro a segunda variável sem parâmetro sobre o que ela deve executar

const acaoCarro = callback => callback();
//Crio uma função com o parâmetro callback e chamo uma das variáveis(que são funções) acima para executar

console.log(acaoCarro(andar))
//Imprimir e invocar a função pai que recebe como parâmetro uma função filha

