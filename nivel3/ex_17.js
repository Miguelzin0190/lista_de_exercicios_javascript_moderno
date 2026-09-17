const aluno = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const {nome, nota1, nota2} = aluno

const calMed = ({nota1, nota2}) => {
    notaF = ((nota1 + nota2) / 2)
}

console.log(`${nome} ficou com média ${calMed(aluno)}`)