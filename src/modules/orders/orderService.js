import { Op } from "sequelize"

import  Meals  from "../meals/mealModel.js"
import Restaurants from "../restaurants/restaurantModel.js"
import Orders from "./orderModel.js"

export class OrdersServices {

    async createOrder (data){
        return await Orders.create(data)
    }



    async findAllorders(){
        return await Orders.findAll({
            where:{
                status:{
                    [Op.in]:["active"]
                }
            },
            include: [
                {
                    model: Meals,
                    include: [
                        {
                            model: Restaurants
                        }
                    ]
                }
            ]
        })
    }




    async findOneOrder(id){
        return await Orders.findOne({
            where: {
                id,
                status: "active"
            }
        })
    }

    async updateOrder(order, data){
        return await order.update(data)
    }

    async deleteOrder(order){
        return await order.update({status:"cancelled"})
    }
}