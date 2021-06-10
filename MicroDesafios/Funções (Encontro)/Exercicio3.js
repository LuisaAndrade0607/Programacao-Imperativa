let nomeJogador = "Houser";
let golsJogador = 0;
let precoEmDolar = 0;

const fazerGol = function(){
    precoEmDolar += 10000;
    golsJogador++;
    console.log("GOL!!!!!")
}

const hatTrick = function(){
fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();
precoEmDolar *= 1.1;
console.log(`${nomeJogador} fez ${golsJogador} gol's e está valendo $${precoEmDolar} dolares.`)
}

hatTrick();
