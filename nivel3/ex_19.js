const jogo = {
    titulo: "Minecraft",
    genero: "SandBox",
    preco: 99
}

const exiJog = ({titulo, genero, preco}) =>
    console.log(`${titulo} é um jogo do gênero ${genero} e custa R$ ${preco}`)

exiJog(jogo)