function Lanchonete (nome,...cardapio){
this.nome = nome,
this.cardapio = cardapio,
this.entrada = function (){
    console.log(`Ei, tá esperando o que? Escolha os lanches: ${this.cardapio}. Pague com Mercado Pago e curta seu ${this.nome}!`)
}
}
let BurgerKing = new Lanchonete ('Burger King','Big King','Mega Stacker Atomico', 'Mega Stacker Rodeio')


BurgerKing.entrada()

