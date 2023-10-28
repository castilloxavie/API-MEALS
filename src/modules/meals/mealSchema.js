import z from "zod"

import { extactValidationErrorData } from "../../common/utils/axtractErrorData.js"

export const MealsSchema = z.object({
    name: z.string().min(4,  {
        message: "The name is too short"
    }),
    price: z.number().positive(),
    restaurantId: z.number().positive(),
})

export const validateMealsSchema = (data) => {
    const result = MealsSchema.safeParse(data)

    const { hasError, errorMessage, data:mealData} = extactValidationErrorData(result)

    return {
        hasError,
        errorMessage,
        mealData
    }
}

export const validatePartialMealSchema = (data) => {
    const result = MealsSchema.partial().safeParse(data)

    const {hasError, errorMessage, data:mealData} = extactValidationErrorData(result)

    return {
        hasError,
        errorMessage,
        mealData
    }
}