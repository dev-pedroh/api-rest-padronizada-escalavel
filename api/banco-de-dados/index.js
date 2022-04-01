//arquivo responsável pela conexão com o banco de dados
//a lib sequelize é um ORM que facilita na conversão dos dados de um bd relacional para o objeto JS.
const Sequelize = require('sequelize')
//acessando a biblioteca com os dados do db
const config = require('config')
//primeiro parametro é o nome do bd, segundo é o usuário, terceiro a senha
const instancia = new Sequelize(
    //para que os dados não fiquem expostos, foram importados de dentro da lib criada "config"
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'), 
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
    
) 



module.exports = instancia 