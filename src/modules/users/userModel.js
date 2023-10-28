import { DataTypes } from "sequelize";

import sequelize from "../../config/database/database.js"
import { encrytedPassword } from "../../config/plugins/encryptedPasswordPlugins.js"

const Users = sequelize.define("user", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "Use_Id"
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    
    },
    status:{
        type: DataTypes.ENUM("available", "not available"),
        allowNull: false,
        defaultValue: "available",
    }, 
    role: {
        type: DataTypes.ENUM("normal", "admin"),
        allowNull: false,
        defaultValue:"normal"
    }

}, {
    hooks: {
        beforeCreate: async (user)=>{
            user.password = await encrytedPassword(user.password)
        }
    }
})

export default Users

