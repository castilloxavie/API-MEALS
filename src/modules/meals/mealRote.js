import { Router } from 'express';

import { restrictTo } from "../users/userMiddleweare.js"
import { mealDelete, mealFindAllWithRestaurants, mealFindOne, mealsCreate, mealUpdate } from './mealController.js';
import { validateExistMeal } from './mealMiddleweare.js';

export const router = Router();

router.route('/').post(restrictTo("admin"), mealsCreate).get(mealFindAllWithRestaurants);

router
    .route('/:id')
    .get(mealFindOne)
    .patch(validateExistMeal,mealUpdate)
    .delete(restrictTo("admin"), mealDelete);
