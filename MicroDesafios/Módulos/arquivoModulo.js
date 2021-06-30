/*Crie um módulo que exporte uma função (em um arquivo separado). Após isso, importe o módulo no arquivo principal e execute a função importada.*/

let soma = function (a,b){//função que vai ser exportada e invocada em outro arquivo
    return a+b
};

module.exports = soma;
//exportando o módulo para outro arquivo