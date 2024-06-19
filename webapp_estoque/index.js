//Aula de 05/06/2024, banco de dados SQLite
const express = require("express")
const mustacheExpress = require("mustacheExpress")
const app = express()
const db = require("./src/db")

//renderizar páginas html com mustache
app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.set("views", __dirname + "/src/views")

//pegar dados do formulário
app.use(express.urlencoded({extended: true}))

//direcionar rotas para módulo específico
app.use("/", require("./src/routes/estoqueRoutes"))

//criar banco de dados
db.sync(function(){
    console.log("Banco de dados conectado")
})

const PORT = 8080
app.listen(PORT, function(){
    console.log("app rodando na porta " + PORT)
})