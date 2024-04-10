let produtos = []

function criarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }

    return p
}

function adicionarProduto(p){
    produtos.push(p)
}

function listarProdutos(){
    return produtos
}

function removerProduto(id){
    produtos.filter((p) => {
        let id = req.params.id
        estoque.removerProduto(id)
        res.send(id)
    }) //função arrow
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos
}