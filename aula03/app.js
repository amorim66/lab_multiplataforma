const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao Node JS")
})

app.get("/cadastrar/:item/:quantidade", function(req, res){
    res.send("<h1>Página de Cadastro</h1> Item:  " + req.params.item + " - Quantidade: " + req.params.quantidade)
})

app.get("/contato", function(req, res){
    res.send("Página de Contato")
})