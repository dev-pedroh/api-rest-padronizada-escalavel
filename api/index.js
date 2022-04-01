//Api seguindo as convenções do REST (por padrão trabalha com json)
//importando a lib que facilita na construção de servidores web
const express = require('express')
//instanciando para executar
const app = express()
//importando lib criada
const config = require('config')
//definindo o formato de dados que iremos trabalhar
app.use(express.json())
//definindo a porta que o servidor responderá, através do método listen (acc 2 params) / definindo a função callback
app.listen(config.get('api.porta'), () => console.log('A API está funcinando!'))