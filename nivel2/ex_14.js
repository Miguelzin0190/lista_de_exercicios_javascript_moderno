const pessoa = {
  nome: "Mariana",
  idade: 25,
  profissao: "Desenvolvedora"
};

const {nome, idade, profissao} = pessoa

const apresentarPessoa = ({nome, idade, profissao}) =>
    console.log(`${nome} tem ${idade} e trabalha como ${profissao}.`)

apresentarPessoa(pessoa)