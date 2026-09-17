const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};

const {marca, modelo, preco, desconto} = notebook

const calPreFin = ({preco, desconto}) => {
    const preF = (preco - desconto)
    return preF
}

console.log(`Notebook ${marca} ${modelo}`)
console.log(`Preço original: R$ ${preco}`)
console.log(`Desconto: R$ ${desconto}`)
console.log(`Preço final: R$ ${calPreFin(notebook)}`)