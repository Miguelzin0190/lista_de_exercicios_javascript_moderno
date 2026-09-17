const pedido = {
  produto: "Teclado Mecânico",
  preco: 250,
  quantidade: 2
};

const tot = (preco, quantidade) =>
    preF = preco * quantidade

const {produto, preco, quantidade} = pedido

console.log(`Produto: ${produto}`)
console.log(`Quantidade: ${quantidade}`)
console.log(`Valor unitário: R$ ${preco}`)
console.log(`Total: R$ ${tot(preco, quantidade)}`)