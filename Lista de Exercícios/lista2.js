//função declarativa

function aprovacao (n1,n2){ 
    let media=(n1+=n2)/2; //crio uma variável para realizar o cálculo
    if ( media >= 6 ) //aplico a condicional
{
     return `Você foi APROVADO! Sua média é = ${media}.`; //retorna a mensagem
}   
   else{ //condicional de fechamento
    return `Você foi REPROVADO! Sua média é = ${media}.`; //retorna a mensagem
}
}
console.log(aprovacao(5,2)); //chama a função e imprime a mensagem de acordo com a condição


// função expressiva
let aprovacao = function(n1,n2){ //declaro a função e atribuo 2 parametros
    let resultado = (n1+=n2)/2
    if (resultado >= 6){ //o cálculo será direto na condicional
        return `Você foi APROVADO! Sua média = ${resultado}` //retorna a mensagem 
    }
    else { //condição de fechamento
        return `Você foi REPROVADO! Sua média = ${resultado}` //retorna a mensagem
    }
} 

console.log(aprovacao(7,10)) //invoca e imprimi o resultado de acordo com a condição
