//Atividade 5 - ESTOQUE
const estoque = require("./util/estoque.js")
const express = require("express")
const app = express()

const PORT = 8080

//listar produtos
app.get("/listar", function(req,res){
    res.send(estoque.listar())
})

//adicionar novo produto
app.get("/adicionar/:id/:nome/:qtd", function(req,res){
    let id = Number(req.params.id)
    let nome = req.params.nome
    let qtd = Number(req.params.qtd)

    estoque.adicionar(id, nome, qtd)

    res.send(`Produto \"${nome}\" adicionado ao estoque.`)
})

//remover produto
app.get("/remover/:id", function(req,res){
    let id = Number(req.params.id)
    estoque.remover(id)
    res.send(id)
    //DANDO ERRO
})

//editar quantidade do produto
app.get("/editar/:id/:qtd", function(req,res){
    let id = Number(req.params.id)
    let qtd = Number(req.params.qtd)

    let editado = estoque.editar(id, qtd)
    if (editado == true){
        res.send(`Produto editado.`)
    }else{
        res.send(`EDIÇÃO FALHOU`)
    }
})

app.listen(PORT, function (){
    console.log("app rodando na porta " + PORT)
})