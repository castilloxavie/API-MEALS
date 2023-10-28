import { AppError, catAsync } from  "../../errors/index.js"
import { validatePartailreviewsSchema, validatereviewsSchema } from "./reviewSchema.js"
import { ReviewsSchema } from "./reviewService.js"

const reviewsServices = new ReviewsSchema()

export const reviewCreate = catAsync(async(req, res) =>{
    const {hasError, errorMessage, reviewData} = validatereviewsSchema(req.body)

    if (hasError) {
        return res.status(422).json({
            status:"error",
            message: errorMessage
        })
    }

    const review = await reviewsServices.createReviews(reviewData)
    return res.json(review)
})

export const revewsFindAll = catAsync(async(req, res) => {
    const reviews = await reviewsServices.findAllReviews()
    return res.json(reviews)
})

export const rewiewFindOne = catAsync(async(req, res, next) => {
    const {id}=req.params
    const review = await reviewsServices.findOneReview(id)

    if(!review){
        return next(new AppError(`the reviews with id :${id}no found`, 404))
    }
    return res.json(review)
})

export const reviewUpdate = catAsync(async(req, res)=>{
    const {hasError, errorMessage, reviewData} = validatePartailreviewsSchema(req.body)

    if(hasError){
        return res.status(422).json({
            status: "error",
            message: errorMessage
        })
    }

    const { id } = req.params
    const review = await reviewsServices.findOneReview(id)

    if(!review){
        return res.status(404).json({
            status: "error",
            message: `review with id: ${id} no found for update`,
        });
    }

    const reviewUp = await reviewsServices.updateReview(review, reviewData)
    return res.json(reviewUp)
})

export const reviewDelete = catAsync(async(req, res, next) => {
    const {id} = req.params
    const review = await reviewsServices.findOneReview(id)

    if(!review){
        return next(new AppError(`review with id: ${id} no found`, 404))
    }

    await reviewsServices.deleteReview(review)
    return res.status(204).json(null)
})