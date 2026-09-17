const produto = {
    preco: 200,
    desconto: 20
}

const {preco, desconto} = produto

const calcularDesconto = ({preco, desconto}) =>
    preF = preco - desconto

console.log(calcularDesconto(produto))