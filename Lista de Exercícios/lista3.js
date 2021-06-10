// Com base no ano atual e no ano de nascimento de uma pessoa, imprimir uma mensagem que diga se ela poderá ou não votar na próxima eleição (não é necessário considerar o mês em que a pessoa nasceu)

function eleicao(n1){
    let idade = (2022 - n1)
    return idade >= 16 ? `Você poderá votar na próxima eleição! ` : `Você não poderá votar na próxima eleição`
}
console.log(eleicao(2008))