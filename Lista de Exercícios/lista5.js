//	As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Criar uma função que através do parâmetro quantidade calcule e imprima o custo total da compra.

let total = function (n1){
    return media = (n1>=12) ? `O valor total é: R$${n1*1}.`:`O valor total é R$${n1*1.30}.`;
}
console.log(total(8))
    
//     if (n1 >= 12)
//     {    
//         return `O valor total é: R$${n1*1}.`;
//     }
//     else
//     {
//         return `O valor total é R$${n1*1.30}.`;
//     }



// let media = (nota1+nota2)/2
// return media >= 6 ? `Aluno aprovado com media ${media}` : `Aluno REPROVADO com media ${media}`;
// }