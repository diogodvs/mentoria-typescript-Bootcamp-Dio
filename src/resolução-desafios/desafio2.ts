enum Profissao {
    Padeiro,
    Atriz
}

type Pessoas = {
    nome: string,
    idade: number,
    trabalho: Profissao
}

const pessoa1: Pessoas = {
    nome: "Maria",
    idade: 29,
    trabalho: Profissao.Atriz
    
}

const pessoa2: Pessoas = {
    nome: "Roberto",
    idade: 19,
    trabalho: Profissao.Padeiro   
}

const pessoa3: Pessoas = {
    nome: "Laura",
    idade: 32,
    trabalho: Profissao.Atriz
    
}

const pessoa4: Pessoas = {
    nome: "Carlos",
    idade: 19,
    trabalho: Profissao.Padeiro
    
}





