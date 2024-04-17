let produtos = []

function listar(){
    return produtos
}

function adicionar(id, nome, qtd){
    let prod = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    produtos.push(prod)
}

function remover(id){
    produtos.filter((prod) => {
        let x = prod.id != id
        return x
    }) 
}

function editar(id, qtd){
    prodEditado = false
    i = 0
    for (i = 0; i < produtos.length; i++){
        if (produtos[i].id == id) {
            produtos[i].qtd = qtd
            prodEditado = true
        }
    }
    return prodEditado
}

module.exports = {
    listar,
    adicionar,
    remover,
    editar
}