// 6)	Criar uma função que considere o número da conta do cliente, saldo, débito e crédito. Calcular e imprimir o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero imprimir a mensagem 'Saldo Positivo', senão imprimir a mensagem 'Saldo Negativo'.

// function total (numConta,n1Saldo, n2Debito, n3Credito){
//     numConta = 12324;
//     let calculo = n1Saldo - (n2Debito + n3Credito);
//     if (calculo >= 0)
//     {
//         return `O saldo da conta ${numConta} está Positivo! Saldo atual = R$ ${calculo}`
//     }
//     else 
//     {
//         return `O saldo da conta ${numConta} está Negativo! O saldo atual = R$ ${calculo}`
//     }
// }
// console.log(total(1000,200,300))


//função declarando variáveis antes

let creditoConta = 100;
let debitoConta = 120;
let saldoConta = 0;

let positivoNegativo = function(saldoConta, debitoConta, creditoConta){
    let saldoAtual = saldoConta - debitoConta + creditoConta;
    if (saldoAtual >= 0) {
        console.log("Saldo Positivo!");
    }
    else {
        console.log("Saldo Negativo");
    }
    return saldoAtual;
}

console.log(positivoNegativo(saldoConta, debitoConta,creditoConta));
console.log(positivoNegativo(saldoConta, debitoConta,creditoConta));