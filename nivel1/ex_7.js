const aluno = {
    nome: "Miguel",
    curso: "DS"
}

const apresentar = (nome, idade) => console.log(`Olá, meu nome é ${aluno.nome} e estudo ${aluno.curso}`)

apresentar(aluno.nome, aluno.idade)