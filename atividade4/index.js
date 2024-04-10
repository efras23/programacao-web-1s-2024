//criar servidor web
const calc = require("./util/calculadora")
const express = require("express")
const app = express()
let PORT = 4040

app.get("/somar/:a/:b", function(req,res){
    a = Number(req.params.a)
    b = Number(req.params.b)
    soma = calc.somar(a,b)
    res.send(`${a} + ${b} = ${soma}`)
})

app.get("/subtrair/:a/:b", function(req,res){
    a = Number(req.params.a)
    b = Number(req.params.b)
    diferenca = calc.subtrair(a,b)
    res.send(`${a} - ${b} = ${diferenca}`)
})

app.get("/multiplicar/:a/:b", function(req,res){
    a = Number(req.params.a)
    b = Number(req.params.b)
    produto = calc.multiplicar(a,b)
    res.send(`${a} * ${b} = ${produto}`)
})

app.get("/dividir/:a/:b", function(req,res){
    a = Number(req.params.a)
    b = Number(req.params.b)
    quociente = calc.dividir(a,b)
    res.send(`${a} / ${b} = ${quociente}`)
})

app.listen(PORT, function() {
    console.log("app rodando na porta " + PORT)
})