import { Router } from 'express';

import { protect } from '../users/userMiddleweare.js';
import { orderCreate, orderDelete, orderFindAll, orderFindOne, orderUpdate } from './orderController.js';

export const router = Router();

router.route('/').post(orderCreate).get(orderFindAll);

router
    .route('/:id')
    .get(orderFindOne)
    .patch(protect, orderUpdate)
    .delete(protect, orderDelete);
