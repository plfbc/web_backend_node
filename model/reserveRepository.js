import { Sequelize } from "sequelize";
import db from "../db.js";
const room = require("./roomRepository.js");
const user = require("./userRepository.js")


const Reserve =  db.define("reserve", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    is_user: {
        
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    
    telefone: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },

});

Reserve.belongsTo(room,{
    constraints: true,
    foreignKey: 'IDRoom',
});

Reserve.belongsTo(user,{
    constraints: true,
    foreignKey: 'IDUser',
});