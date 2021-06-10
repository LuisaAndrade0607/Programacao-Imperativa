//8)	Criar uma função que verifique se um valor é positivo, negativo ou zero.

let verificacao = function(n1){
    if (n1 > 0) 
    {
        return `O número ${n1} é POSITIVO!`
    }
    else if (n1==0)
    {
        return `O número ${n1} é ZERO!`
    }   
    else (n1<0) 
    {
        return `O número ${n1} é NEGATIVO!`
    }
    
}

console.log(verificacao(-8))