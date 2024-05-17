"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserModel extends sequelize_1.Model {
    }
    UserModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
    }, {
        timestamps: true,
        paranoid: true,
        tableName: "users",
        sequelize,
    });
    return UserModel;
};
// export default userModel;
// export { , UserAttributes };
// export { UserModel, UserAttributes };
