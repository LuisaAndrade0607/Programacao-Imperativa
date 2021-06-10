// 10)	Escreva uma função que considere o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 5,20 e o preço do litro do álcool é R$ 4,20.


let gasto = function (litros,tipoCombustivel){
    let gasolina = litros*5.20
    let alcool = litros*4.20
    if (tipoCombustivel == "G") 
    {
        return `Valor total = R$${gasolina} .` 
    }
    else if (tipoCombustivel == "A")
    {
        return `Valor total = R$${alcool} .`
    }
    else 
    {
        return `Não temos esse combustível!`
    }
}

console.log(gasto(10,"G"))

// function total (litros,tipo){
//  if tipo = "A"
// }
