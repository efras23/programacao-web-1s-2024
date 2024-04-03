const express = require("express")
const vnp = require("./util/verificar_numero_primo")
const app = express() //cria aplicação express

const PORT = 5001

app.get('/', function(req, res){
    res.send("página incial")
})

app.get('/ola', function(req, res){
    res.send("ola")
})

app.get('/ola/efraim', function(x, y){
    y.send("ola, efraim")
})

//com parametros
app.get('/ola/:nome', function(req, res){
    let n = req.params.nome
    res.send("ola" + n)
})

app.get('/verificar-numero-primo/:n', function(req, res){
    let n = req.params.n
    let ehPrimo = vnp.verificarNumeroPrimo(n)
    res.send(ehPrimo)
})

app.listen(PORT, function(){
    console.log("app rodando na porta " + PORT)
})