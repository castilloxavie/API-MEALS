import { AppError, catAsync } from '../../errors/index.js';
import { ReviewsSchema } from '../reviews/reviewService.js';
import { validationPartialRestaurantsSchema, validationRestaurantsSchema } from './restaurantSchema.js';
import { RestaurantsServices } from './restaurantService.js';

const restaurantServices = new RestaurantsServices();
const reviewServices = new ReviewsSchema();

export const restaurantCreate = catAsync(async (req, res) => {
    const { hasError, errorMessage, restaurantData } =
        validationRestaurantsSchema(req.body);

    if (hasError) {
        return res.status(422).json({
            status: 'error',
            message: errorMessage,
        });
    }

    const restaurant = await restaurantServices.createRestaurant(
        restaurantData
    );
    return res.json(restaurant);
});

export const restaurantsfindAll = catAsync(async (req, res) => {
    const restaurants = await restaurantServices.findAllRestaurants();
    return res.json(restaurants);
});

export const restaurantFindOne = catAsync(async (req, res, next) => {
    const { id } = req.params;
    const restaurant = await restaurantServices.findOneRestaurants(id);

    if (!restaurant) {
        return next(new AppError(`the restaurant with id :${id}no found`, 404));
    }
    return res.json(restaurant);
});

export const restaurantUpdate = catAsync(async (req, res) => {
    const { hasError, errorMessage, restaurantData } =
        validationPartialRestaurantsSchema(req.body);

    if (hasError) {
        return res.status(422).json({
            status: 'error',
            message: errorMessage,
        });
    }

    const { id } = req.params;
    const restaurant = await restaurantServices.findOneRestaurants(id);

    if (!restaurant) {
        return res.status(404).json({
            status: 'error',
            message: `review with id: ${id} no found for update`,
        });
    }

    const restaurantUp = await restaurantServices.updateRestaurants(
        restaurant,
        restaurantData
    );
    return res.json(restaurantUp);
});

export const restaurantDelete = catAsync(async (req, res, next) => {
    const { id } = req.params;
    const restaurant = await restaurantServices.findOneRestaurants(id);

    if (!restaurant) {
        return next(new AppError(`restaurant with id: ${id} no found`, 404));
    }

    await restaurantServices.deleteRestaurants(restaurant);
    return res.status(204).json(null);
});

export const createReviewToRestaurant = catAsync(async (req, res, next) => {
    const { comment, rating } = req.body;
    const { id } = req.params;
    const { sessionUser } = req;

    const review = await reviewServices.createReviews({
        comment,
        rating,
        restaurantId: id,
        userId: sessionUser.id,
        
    });
    
    return res.status(201).json(review);
});

export const updateReview = catAsync(async(req, res, next) =>{
    const {comment, rating} = req.body
    const {review} = req

    const reviewUp = await reviewServices.updateReview(review, {comment, rating})
    return res.status(200).json(reviewUp)
});

export const deletereview = catAsync(async (req, res, next) => {
    const {id} = req.body
    const {review} = req

    const reviewUp = await reviewServices.updateReview(review, {id})

    if (!reviewUp) {
        return next(new AppError(`restaurant with id: ${id} no found`, 404));
    }

    await reviewServices.deleteReview(reviewUp)
    return res.status(204).json(null)

});
