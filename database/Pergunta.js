const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("pergunta", {
    titulo:{
        type: Sequelize.STRING,
       
    },
    des:{
        type: Sequelize.TEXT,
       
    } 
});

Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;