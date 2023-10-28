import z from "zod"

import { extactValidationErrorData } from "../../common/utils/axtractErrorData.js"

export const restaurantsSchema = z.object({
    name: z.string().min(4, {
        message: "The name is too short"
    }),
    address: z.string().min(4, {
        message: "The address is too short"
    }),
    rating: z.number().min(1).max(5)
})


export const validationRestaurantsSchema = (data) => {
    const result = restaurantsSchema.safeParse(data)

    const {hasError, errorMessage, data:restaurantData} = extactValidationErrorData( result)

    return {
        hasError,
        errorMessage,
        restaurantData
    }
}

export const validationPartialRestaurantsSchema = (data) => {
    const result = restaurantsSchema.partial().safeParse(data)

    const {hasError, errorMessage, data:restaurantData} = extactValidationErrorData(result)

    return {
        hasError, 
        errorMessage,
        restaurantData
    }
}