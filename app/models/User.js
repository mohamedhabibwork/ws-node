const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require("../../database");

class User extends Model {
}

User.init({
    id: {
        field: "id",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        field: "username",
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        field: "password",
        type: DataTypes.STRING,
    },
    token: {
        field: "token",
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
    },
}, {
    timestamps: true,
    tableName: "users",
    modelName: "User",
    sequelize,
});

module.exports = User;