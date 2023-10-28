import Meals from "../../modules/meals/mealModel.js"
import Orders from "../../modules/orders/orderModel.js"
import Restaurants from "../../modules/restaurants/restaurantModel.js"
import Reviews from "../../modules/reviews/reviewModel.js"
import Users from "../../modules/users/userModel.js"

export const relationModel = () => {
    Users.hasMany(Orders, {foreignKey: "user_Id", })
    Orders.belongsTo(Users, {foreignKey: "user_Id", })

    Users.hasMany(Reviews, {foreignKey: "user_Id", })
    Reviews.belongsTo(Users, {foreignKey: "user_Id" })

    Restaurants.hasMany(Meals, {foreignKey: "restaurant_Id", })
    Meals.belongsTo(Restaurants, {foreignKey: "restaurant_Id", })

    Restaurants.hasMany(Reviews, {foreignKey: "restaurant_Id",})
    Reviews.belongsTo(Restaurants, {foreignKey: "restaurant_Id",})

    Meals.hasOne(Orders, {foreignKey: "meal_Id", })
    Orders.belongsTo(Meals, {foreignKey: "meal_Id", })
}