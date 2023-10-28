import { AppError, catAsync } from "../../errors/index.js"
import { MealsServices } from "./mealService.js"

const mealsServices = new MealsServices()

export const validateExistMeal = catAsync(async(req, res, next) => {
    const {id} = req.params
    const meals = await mealsServices.findOneMeals(id)

    if (!meals) {
        return next(new AppError("review not found", 404))
    }

    req.meals = meals
})