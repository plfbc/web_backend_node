import { Sequelize } from "sequelize";
import db from "../db.js";

const Reserve = require('./reserveRepository.js')


const Room = db.define("room", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    numero: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Room.belongsToMany(Reserve)