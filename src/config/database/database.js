import { Sequelize } from "sequelize";

import { envs } from "../environmenst/environmenst.js"

const sequelize = new Sequelize(envs.DB_URI, {
    logging: false
})



export async function authenticated(){
    try {
        await sequelize.authenticate()
        console.log("db, connection ok!💀");
    } catch (error) {
        throw new Error("Authentication Error")
    }
}

export async function sincronize(){
    try {
        await sequelize.sync()
        console.log("db, connection ok!💀");
    } catch (error) {
        throw new Error("synchronization error")
    }
}

export default  sequelize