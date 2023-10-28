import { AppError, catAsync } from "../../errors/index.js"
import { OrdersServices } from "./orderService.js"

const orderService = new OrdersServices()

export const validateExistOrder = catAsync(async(req, res, next) => {
    const {id} = req.params
    const order = await orderService.findOneOrder(id)

    if (!order) {
        return next(new AppError(`order not found with id: ${id}`, 404))
    }
    req.order = order
    next()
})