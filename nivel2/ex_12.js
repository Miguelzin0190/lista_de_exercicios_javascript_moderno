const produto = {
  nome: "Mouse",
  preco: 80
};

const mostrarProduto = (nome, preco) =>
    console.log(`Produto: ${produto.nome} - Preço: ${produto.preco}`)

mostrarProduto(produto)