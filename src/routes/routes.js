import { Router } from "express";

import { router as mealRouter } from "../modules/meals/mealRote.js";
import { router as orderRouter } from "../modules/orders/orderRoute.js";
import { router as restauranRouter } from "../modules/restaurants/restaurantRote.js";
import { router as reviewRouter } from "../modules/reviews/reviewRoute.js";
import { protect } from "../modules/users/userMiddleweare.js";
import { router as userRouter } from "../modules/users/userRouter.js";

export const router = Router()

router.use("/user", userRouter)
router.use(protect)
router.use("/review", reviewRouter)
router.use("/order", orderRouter)
router.use("/meal", mealRouter)
router.use("/restaurant", restauranRouter)
