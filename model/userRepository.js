import { Sequelize } from "sequelize";
import db from "../db.js";

const User =  db.define("user", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
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

export default User;